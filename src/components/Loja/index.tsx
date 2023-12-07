import ButtonLink from '../ButtonLink'
import Note from '../Note'
import Tag from '../Tag'
import { Card, Descricao, HeaderLoja, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  highlight?: string
  description: string
  image: string
  note: number
  rote: string
}

const Loja = ({
  title,
  category,
  highlight,
  description,
  image,
  note,
  rote
}: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      <Tag>{category}</Tag>
      {highlight && <Tag>{highlight}</Tag>}
    </Infos>
    <HeaderLoja>
      <Titulo>{title}</Titulo>
      <Note>{note}</Note>
    </HeaderLoja>
    <Descricao>{description}</Descricao>
    <ButtonLink title={'Saiba mais'} to={rote}>
      Saiba mais
    </ButtonLink>
  </Card>
)

export default Loja
