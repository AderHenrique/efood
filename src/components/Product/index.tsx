import ButtonCart from '../ButtonCart'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <S.Card>
    <img src={image} />
    <S.Titulo>{title}</S.Titulo>
    <S.Descricao>{description}</S.Descricao>
    <ButtonCart />
  </S.Card>
)

export default Product
