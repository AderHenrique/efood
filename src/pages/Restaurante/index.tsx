import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import ProductList from '../../components/ProductList'

export type Menu = {
  id: number
  capa: string
  titulo: string
  tipo: string
  cardapio: MenuItems[]
}

export type MenuItems = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantePage = () => {
  const { id } = useParams<{ id: string }>()
  const [menu, setMenu] = useState<Menu | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => {
          const dadosRecebidos: Menu = res
          setMenu(dadosRecebidos)
        })
    }
  }, [id])

  return (
    <>
      {menu && (
        <>
          <HeaderRestaurant loja={menu} />
          <ProductList menuItem={menu.cardapio} />
        </>
      )}
      {!menu && <p>...</p>}
    </>
  )
}

export default RestaurantePage
