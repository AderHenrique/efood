import { useEffect, useState } from 'react'
import HeaderHome from '../../components/HeaderHome'
import ListaLojas from '../../components/ListaLojas'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

  return (
    <>
      <HeaderHome />
      <ListaLojas restaurante={restaurantes} />
    </>
  )
}

export default Home
