import * as S from './styles' // estilos
import ButtonCart from '../ButtonCart' // componente interno
import fechar from '../../assets/images/close 1.png' // asset
import { useState } from 'react' // biblioteca externa
import { useDispatch } from 'react-redux' // Redux
import { add, open } from '../../store/reducers/cart' // ação do Redux
import { MenuItems } from '../../pages/Restaurante'
import { formataPreco } from '../../utils/format'

type Props = {
  menuItem: MenuItems // prop
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
        <ButtonCart type={'cart'} onClick={openModal} />
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
                <ButtonCart
                  onClick={handleAddToCart}
                  type={'infos'}
                  valor={formataPreco(preco)}
                />
              </S.Infos>
            </S.ModalContent>
          </S.Modal>
        </>
      )}
    </div>
  )
}

export default Product
