import { Link } from 'react-router-dom'

import Note from '../Note'
import Tag from '../Tag'

import * as S from './styles'
import Button from '../Button'

type Props = {
  title: string
  category: string
  highlight: boolean
  description: string
  image: string
  note: number
  rota: string
}

const StoreCard = ({
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
        <Button type="link">Saiba mais</Button>
      </Link>
    </S.Card>
  )
}

export default StoreCard
