import HeaderHome from '../../components/HeaderHome'
import ListaLojas from '../../components/ListaLojas'
import { useGetHomeQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetHomeQuery()

  if (isLoading || !restaurantes) {
    return <h3>Carregando</h3>
  }

  return (
    <div>
      <HeaderHome />
      <ListaLojas restaurantes={restaurantes} />
    </div>
  )
}

export default Home
