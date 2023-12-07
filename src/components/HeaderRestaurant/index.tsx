import logo from '../../assets/images/logo.png'
import {
  Container,
  Imagem,
  Link,
  LogoRestaurante,
  Nome,
  TextoSobreImagem,
  Tipo
} from './styles'
import vectorImg from '../../assets/images/Vector.png'

const HeaderRestaurant = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${vectorImg})` }}>
      <Container>
        <Link href="/">Restaurantes</Link>
        <img src={logo} alt="EFOOD" />
        <p>
          <span>0 </span>
          produto(s) no carrinho
        </p>
      </Container>
    </Imagem>
    <LogoRestaurante />
    <TextoSobreImagem>
      <Tipo>Italiana</Tipo>
      <Nome>La Dolce Vita Trattoria</Nome>
    </TextoSobreImagem>
  </>
)

export default HeaderRestaurant
