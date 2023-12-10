import logo from '../../assets/images/logo.png'
import * as S from './styles'
import vectorImg from '../../assets/images/Vector.png'

const HeaderRestaurant = () => (
  <>
    <S.Imagem style={{ backgroundImage: `url(${vectorImg})` }}>
      <S.Header className="container">
        <S.Link href="/">Restaurantes</S.Link>
        <img src={logo} alt="EFOOD" />
        <p>
          <span>0 </span>
          produto(s) no carrinho
        </p>
      </S.Header>
    </S.Imagem>
    <S.LogoRestaurante />
    <div className="container">
      <S.TextoSobreImagem>
        <S.Tipo>Italiana</S.Tipo>
        <S.Nome>La Dolce Vita Trattoria</S.Nome>
      </S.TextoSobreImagem>
    </div>
  </>
)

export default HeaderRestaurant
