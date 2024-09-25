import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import ButtonCart from '../ButtonCart'
import lixeria from '../../assets/images/lixeira-de-reciclagem 1.png'
import { formataPreco } from '../../utils/format'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleClick = () => {}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, itemAtual) => {
      return (acumulador += itemAtual.preco * itemAtual.quantity)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.Card>
          {items.map((item) => (
            <S.Item key={item.id}>
              <S.img src={item.foto} alt={item.nome} />
              <S.ItemInfos>
                <h3>{item.nome}</h3>
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
        <ButtonCart type="buy" onClick={handleClick}>
          Continuar com a entrega
        </ButtonCart>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
