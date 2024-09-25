import { MenuItems } from '../../pages/Restaurante'
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
          {menuItem.map((item) => (
            <Product key={item.id} menuItem={item} />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
