import * as S from './styles'
import ButtonCart from '../ButtonCart'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  id: number
}

const Product = ({ nome, descricao, foto, porcao, preco, id }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add({ nome, descricao, foto, porcao, preco, id }))
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const cortaTexto = (text: string, maxLength: number) => {
    return {
      textoCortado:
        text.length <= maxLength ? text : text.slice(0, maxLength) + '...',
      original: text
    }
  }
  const { textoCortado, original } = cortaTexto(descricao, 128)

  return (
    <>
      <S.Card>
        <S.Image src={foto} alt={nome} />
        <S.Titulo>{nome}</S.Titulo>
        <S.Descricao>{textoCortado}</S.Descricao>
        <ButtonCart type={'cart'} onClick={openModal} />
      </S.Card>
      <>
        {isModalOpen && (
          <>
            <S.Overlay isOpen={isModalOpen} onClick={closeModal} />
            <S.Modal>
              <S.Imgfechar src={fechar} onClick={closeModal} />
              <S.ModalContent className="container">
                <S.ImgComida src={foto} />
                <S.Infos>
                  <h3>{nome}</h3>
                  <p>{original}</p>
                  <p>{porcao}</p>
                  <ButtonCart
                    onClick={addToCart}
                    type={'infos'}
                    valor={formataPreco(preco)}
                  />
                </S.Infos>
              </S.ModalContent>
            </S.Modal>
          </>
        )}
      </>
    </>
  )
}

export default Product
