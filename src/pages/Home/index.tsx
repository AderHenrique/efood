import HeaderHome from '../../components/HeaderHome'
import ListaLojas from '../../components/ListaLojas'
import { useGetHomeQuery } from '../../services/api'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const { data: restaurante, isLoading } = useGetHomeQuery()

  if (isLoading || !restaurante) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <HeaderHome />
      <ListaLojas restaurantes={restaurante} />
    </>
  )
}

export default Home
