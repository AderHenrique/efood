import HeaderRestaurant from '../../components/HeaderRestaurant'
import ProductConstructor from '../../components/models/ProductConstructor'
import marguerita from '../../assets/images/marguerita.png'
import ProductList from '../../components/ProductList'

const produto: ProductConstructor[] = [
  {
    id: 1,
    title: `Pizza Marguerita`,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 2,
    title: `Pizza Marguerita`,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 3,
    title: `Pizza Marguerita`,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 4,
    title: `Pizza Marguerita`,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 5,
    title: `Pizza Marguerita`,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 6,
    title: `Pizza Marguerita`,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  }
]

const VitaTrattoria = () => (
  <>
    <HeaderRestaurant />
    <ProductList products={produto} />
  </>
)

export default VitaTrattoria
