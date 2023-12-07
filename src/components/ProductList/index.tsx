import Product from '../Product'
import ProductConstructor from '../models/ProductConstructor'
import { Container, List } from './styles'

type Props = {
  products: ProductConstructor[]
}

const ProductList = ({ products }: Props) => (
  <Container>
    <List>
      {products.map((ProductConstructor) => (
        <Product
          key={ProductConstructor.id}
          title={ProductConstructor.title}
          description={ProductConstructor.description}
          image={ProductConstructor.image}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
