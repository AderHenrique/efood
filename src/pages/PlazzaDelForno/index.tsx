import { useEffect, useState } from 'react'
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

const PlazzaDelForno = () => {
  const [menu, setMenu] = useState<Menu | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/5')
      .then((res) => res.json())
      .then((res) => {
        const dadosRecebidos: Menu = res
        setMenu(dadosRecebidos)
      })
  }, [])
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
export default PlazzaDelForno
