import { MenuItems } from '../../pages/BellaTavola'
import Product from '../Product'
import * as S from './styles'

type Props = {
  menuItem: MenuItems[]
}

const ProductList = ({ menuItem }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {menuItem.map((menuItems) => (
            <Product
              key={menuItems.id}
              id={menuItems.id}
              nome={menuItems.nome}
              descricao={menuItems.descricao}
              foto={menuItems.foto}
              preco={menuItems.preco}
              porcao={menuItems.porcao}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductList
