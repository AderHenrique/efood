import * as S from './styles'
import ButtonCart from '../ButtonCart'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
  price: number
  portion: string
}

const Product = ({ title, description, image, portion, price }: Props) => {
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
  const { textoCortado, original } = cortaTexto(description, 128)

  return (
    <>
      <S.Card>
        <S.Image src={image} alt={title} />
        <S.Titulo>{title}</S.Titulo>
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
                <S.ImgComida src={image} />
                <S.Infos>
                  <h3>{title}</h3>
                  <p>{original}</p>
                  <p>{portion}</p>
                  <ButtonCart
                    onClick={closeModal}
                    type={'infos'}
                    valor={formataPreco(price)}
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
