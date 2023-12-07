import ButtonCart from '../ButtonCart'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonCart />
  </Card>
)

export default Product
