import * as S from './styles'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { MenuItems } from '../../pages/Restaurante'
import { formataPreco } from '../../utils/format'
import Button from '../Button'

type Props = {
  menuItem: MenuItems
}

const Product = ({ menuItem }: Props) => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addToCart = () => {
    dispatch(add(menuItem))
    dispatch(open())
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const cortaTexto = (text: string, maxLength: number) => {
    return {
      textoCortado:
        text.length <= maxLength ? text : text.slice(0, maxLength) + '...',
      original: text
    }
  }

  const handleAddToCart = () => {
    addToCart()
    closeModal()
  }

  const { nome, descricao, foto, porcao, preco } = menuItem
  const { textoCortado, original } = cortaTexto(descricao, 128)

  return (
    <div className="container">
      <S.Card>
        <S.Image src={foto} alt={nome} />
        <S.Titulo>{nome}</S.Titulo>
        <S.Descricao>{textoCortado}</S.Descricao>
        <Button type="cart" onClick={openModal}>
          Mais detalhes
        </Button>
      </S.Card>

      {isModalOpen && (
        <>
          <S.Overlay isOpen={isModalOpen} onClick={closeModal} />
          <S.Modal>
            <S.Imgfechar src={fechar} onClick={closeModal} />
            <S.ModalContent className="container">
              <S.ImgComida src={foto} alt={nome} />
              <S.Infos>
                <h3>{nome}</h3>
                <p>{original}</p>
                <p>{porcao}</p>
                <Button type="addToCart" onClick={handleAddToCart}>
                  {`Adicionar ao carrinho - ${formataPreco(preco)}`}
                </Button>
              </S.Infos>
            </S.ModalContent>
          </S.Modal>
        </>
      )}
    </div>
  )
}

export default Product
