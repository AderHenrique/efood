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
              title={menuItems.nome}
              description={menuItems.descricao}
              image={menuItems.foto}
              price={menuItems.preco}
              portion={menuItems.porcao}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductList
