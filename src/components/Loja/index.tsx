import ButtonLink from '../ButtonLink'
import Note from '../Note'
import Tag from '../Tag'
import * as S from './styles'

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
  <S.Card>
    <img src={image} />
    <S.Infos>
      <Tag>{category}</Tag>
      {highlight && <Tag>{highlight}</Tag>}
    </S.Infos>
    <S.HeaderLoja>
      <S.Titulo>{title}</S.Titulo>
      <Note>{note}</Note>
    </S.HeaderLoja>
    <S.Descricao>{description}</S.Descricao>
    <ButtonLink title={'Saiba mais'} to={rote}>
      Saiba mais
    </ButtonLink>
  </S.Card>
)

export default Loja
