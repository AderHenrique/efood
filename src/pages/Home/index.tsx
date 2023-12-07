import HeaderHome from '../../components/HeaderHome'
import ListaLojas from '../../components/ListaLojas'
import Restaurante from '../../components/models/Restaurante'
import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'

const loja: Restaurante[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    highlight: 'Destaque da semana',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    rote: '/sushi'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    rote: '/trattoria'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    rote: '/trattoria'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    rote: '/trattoria'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    rote: '/trattoria'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    rote: '/trattoria'
  }
]

const Home = () => (
  <>
    <HeaderHome />
    <ListaLojas restaurantes={loja} />
  </>
)

export default Home
