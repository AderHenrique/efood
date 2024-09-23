import ButtonLink from '../ButtonLink'
import Note from '../Note'
import Tag from '../Tag'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  category: string
  highlight: boolean
  description: string
  image: string
  note: number
  rota: string
}

const Loja = ({
  title,
  category,
  highlight,
  description,
  image,
  note,
  rota
}: Props) => {
  return (
    <S.Card>
      <S.Imagem src={image} />
      <S.Infos>
        {highlight && <Tag>Destaque da Semana</Tag>}
        <Tag>{category}</Tag>
      </S.Infos>
      <S.HeaderLoja>
        <S.Titulo>{title}</S.Titulo>
        <Note>{note}</Note>
      </S.HeaderLoja>
      <S.Descricao>{description}</S.Descricao>
      <Link to={`/restaurante/${rota}`}>
        <ButtonLink title={'Saiba mais'}>Saiba mais</ButtonLink>
      </Link>
    </S.Card>
  )
}

export default Loja
