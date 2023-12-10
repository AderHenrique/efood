import Product from '../Product'
import ProductConstructor from '../models/ProductConstructor'
import * as S from './styles'

type Props = {
  products: ProductConstructor[]
}

const ProductList = ({ products }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {products.map((ProductConstructor) => (
          <Product
            key={ProductConstructor.id}
            title={ProductConstructor.title}
            description={ProductConstructor.description}
            image={ProductConstructor.image}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductList
