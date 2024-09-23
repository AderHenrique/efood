import HeaderHome from '../../components/HeaderHome'
import ListaLojas from '../../components/ListaLojas'
import { useGetHomeQuery } from '../../services/api'
<<<<<<< HEAD

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
=======
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05

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
<<<<<<< HEAD
  const { data: restaurantes, isLoading } = useGetHomeQuery()

  if (isLoading || !restaurantes) {
=======
  const { data: restaurante, isLoading } = useGetHomeQuery()

  if (isLoading || !restaurante) {
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05
    return <h3>Carregando</h3>
  }

  return (
    <>
      <HeaderHome />
<<<<<<< HEAD
      <ListaLojas restaurantes={restaurantes} />
=======
      <ListaLojas restaurantes={restaurante} />
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05
    </>
  )
}

export default Home
