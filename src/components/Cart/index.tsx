import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { formataPreco } from '../../utils/format'

import Button from '../Button'
import lixeria from '../../assets/images/lixeira-de-reciclagem 1.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const [stage, setStage] = useState(1)

  const form = useFormik({
    initialValues: {
      recipientName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      addressComplement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      recipientName: Yup.string()
        .min(3, 'O nome do destinatário deve conter no mínimo 3 caracteres.')
        .required('O nome do destinatário é obrigatório.'),

      address: Yup.string()
        .min(5, 'O endereço deve conter no mínimo 5 caracteres.')
        .required('O endereço é obrigatório.'),

      city: Yup.string()
        .min(5, 'A cidade deve conter no mínimo 5 caracteres.')
        .required('A cidade é obrigatória.'),

      cep: Yup.string()
        .length(8, 'O CEP deve conter exatamente 8 caracteres.')
        .required('O CEP é obrigatório.'),

      addressNumber: Yup.string()
        .min(1, 'O número do endereço deve conter no mínimo 1 caractere.')
        .required('O número do endereço é obrigatório.'),

      cardOwner: Yup.string().when((values, schema) =>
        stage === 3
          ? schema
              .required('O nome no cartão é obrigatório.')
              .min(3, 'O nome no cartão deve ter pelo menos 3 caracteres.')
          : schema
      ),

      cardNumber: Yup.string().when((values, schema) =>
        stage === 3
          ? schema
              .required('O número do cartão é obrigatório.')
              .min(13, 'O número do cartão deve ter pelo menos 13 dígitos.')
              .max(16, 'O número do cartão deve ter no máximo 16 dígitos.')
          : schema
      ),

      cardCode: Yup.string().when((values, schema) =>
        stage === 3
          ? schema
              .required('O código de segurança (CVV) é obrigatório.')
              .min(3, 'O CVV deve ter exatamente 3 dígitos.')
              .max(3, 'O CVV deve ter exatamente 3 dígitos.')
          : schema
      ),

      expiresMonth: Yup.string().when((values, schema) =>
        stage === 3
          ? schema
              .required('O mês que o cartão expira é obrigatório.')
              .min(2, 'O mês deve ter exatamente 2 dígitos.')
              .max(2, 'O mês deve ter exatamente 2 dígitos.')
          : schema
      ),

      expiresYear: Yup.string().when((values, schema) =>
        stage === 3
          ? schema
              .required('O ano que o cartão expira é obrigatório.')
              .min(4, 'O mês deve ter exatamente 4 dígitos.')
              .max(4, 'O mês deve ter exatamente 4 dígitos.')
          : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          reciver: values.recipientName,

          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),

            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10.99
          }
        ]
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
    setStage(1)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, itemAtual) => {
      return (acumulador += itemAtual.preco * itemAtual.quantity)
    }, 0)
  }

  const nextStage = () => setStage(stage + 1)

  const nextStageForm = async () => {
    // Verifica se os campos de entrega estão válidos
    if (stage === 2) {
      const errors = await form.validateForm()
      if (Object.keys(errors).length === 0) {
        form.handleSubmit()
        setStage(3) // Avança para o pagamento
      } else {
        // Exibe os erros de validação
        console.log(errors)
        form.setTouched({
          recipientName: true,
          address: true,
          city: true,
          cep: true,
          addressNumber: true
        })
      }
    }

    // Verifica se os campos de pagamento estão válidos
    if (stage === 3) {
      const errors = await form.validateForm()
      if (Object.keys(errors).length === 0) {
        form.handleSubmit()
        setStage(4)
      } else {
        console.log(errors)
        form.setTouched({
          cardOwner: true,
          cardNumber: true,
          cardCode: true,
          expiresMonth: true,
          expiresYear: true
        })
      }
    }
  }

  const prevStage = () => setStage(stage - 1)

  const renderStage = () => {
    if (stage === 1) {
      const isCartEmpty = items.length === 0

      return (
        <>
          <S.Card>
            {items.map((item) => (
              <S.Item key={item.id}>
                <S.img src={item.foto} alt={item.nome} />
                <S.ItemInfos>
                  <h3 className="rosa">{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                  <p>Quantidade: {item.quantity}</p>
                </S.ItemInfos>
                <S.LixeiraIcon
                  src={lixeria}
                  alt="Remover item"
                  onClick={() => removeItem(item.id)}
                />
              </S.Item>
            ))}
          </S.Card>

          <S.Price>
            <div>
              <p>Valor total</p>
            </div>
            <div>
              <p>{formataPreco(getTotalPrice())}</p>
            </div>
          </S.Price>
          <Button
            type="cart"
            onClick={() => {
              if (isCartEmpty) {
                alert('Seu carrinho está vazio.')
              } else {
                nextStage()
              }
            }}
          >
            Continuar com a entrega
          </Button>
        </>
      )
    } else if (stage === 2) {
      return (
        <form onSubmit={form.handleSubmit}>
          <h3 className="bege">Entrega</h3>

          <S.InputGroup>
            <label htmlFor="recipientName">Quem irá receber</label>
            <input
              id="recipientName"
              type="text"
              name="recipientName"
              value={form.values.recipientName}
              onChange={form.handleChange}
            />
            <S.ErrorMessage>
              {getErrorMessage('recipientName', form.errors.recipientName)}
            </S.ErrorMessage>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
            />
            <S.ErrorMessage>
              {getErrorMessage('address', form.errors.address)}
            </S.ErrorMessage>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
            />
            <S.ErrorMessage>
              {getErrorMessage('city', form.errors.city)}
            </S.ErrorMessage>
          </S.InputGroup>

          <S.FlexContainer>
            <S.InputGroup $maxWidth="155px">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
              />
              <S.ErrorMessage>
                {getErrorMessage('cep', form.errors.cep)}
              </S.ErrorMessage>
            </S.InputGroup>

            <S.InputGroup $maxWidth="155px">
              <label htmlFor="addressNumber">Número</label>
              <input
                id="addressNumber"
                type="text"
                name="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
              />
              <S.ErrorMessage>
                {getErrorMessage('addressNumber', form.errors.addressNumber)}
              </S.ErrorMessage>
            </S.InputGroup>
          </S.FlexContainer>

          <S.InputGroup>
            <label htmlFor="addressComplement">Complemento (opcional)</label>
            <input
              id="addressComplement"
              type="text"
              name="addressComplement"
              value={form.values.addressComplement}
              onChange={form.handleChange}
            />
          </S.InputGroup>

          <S.ButtonGroup>
            <Button type="cart" htmlType="submit" onClick={nextStageForm}>
              Continuar com o pagamento
            </Button>

            <Button type="cart" onClick={prevStage}>
              Voltar para o carrinho
            </Button>
          </S.ButtonGroup>
        </form>
      )
    } else if (stage === 3) {
      return (
        <form onSubmit={form.handleSubmit}>
          <h3 className="bege">
            Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
          </h3>

          <S.InputGroup>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <input
              id="cardOwner"
              type="text"
              name="cardOwner"
              value={form.values.cardOwner}
              onChange={form.handleChange}
            />
            <S.ErrorMessage>
              {getErrorMessage('cardOwner', form.errors.cardOwner)}
            </S.ErrorMessage>
          </S.InputGroup>

          <S.FlexContainer>
            <S.InputGroup $maxWidth="288px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
              />
              <S.ErrorMessage>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </S.ErrorMessage>
            </S.InputGroup>

            <S.InputGroup $maxWidth="87px">
              <label htmlFor="cardCode">CVV</label>
              <input
                id="cardCode"
                type="text"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
              />
              <S.ErrorMessage>
                {getErrorMessage('cardCode', form.errors.cardCode)}
              </S.ErrorMessage>
            </S.InputGroup>
          </S.FlexContainer>

          <S.FlexContainer>
            <S.InputGroup $maxWidth="155px">
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
              />
              <S.ErrorMessage>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </S.ErrorMessage>
            </S.InputGroup>

            <S.InputGroup $maxWidth="155px">
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
              />
              <S.ErrorMessage>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </S.ErrorMessage>
            </S.InputGroup>
          </S.FlexContainer>

          <S.ButtonGroup>
            <Button type="cart" htmlType="submit" onClick={nextStageForm}>
              Finlizar pedido
            </Button>

            <Button type="cart" onClick={prevStage}>
              Voltar para a edição de endereço
            </Button>
          </S.ButtonGroup>
        </form>
      )
    } else if (stage === 4) {
      return (
        <>
          {data ? (
            <h3 className="bege">Pedido realizado - {data.orderId}</h3>
          ) : (
            <h3 className="bege">Carregando...</h3> // Mensagem alternativa enquanto espera o carregamento
          )}
          <p className="bege">
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido
          </p>

          <p className="bege">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>

          <p className="bege">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>

          <p className="bege">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>

          <Button type="cart" onClick={closeCart}>
            Concluir
          </Button>
        </>
      )
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>{renderStage()}</S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
