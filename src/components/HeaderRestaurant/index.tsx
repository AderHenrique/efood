import logo from '../../assets/images/logo.png'
import * as S from './styles'
import { Menu } from '../../pages/BellaTavola'
import vectorImg from '../../assets/images/Vector.png'

type Props = {
  loja: Menu
}

const HeaderRestaurant = ({ loja }: Props) => {
  const capa = loja.capa || ''
  const tipo = loja.tipo || ''
  const nome = loja.titulo || ''

  return (
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
      <S.LogoRestaurante style={{ backgroundImage: `url(${capa})` }} />
      <div className="container">
        <S.TextoSobreImagem>
          <S.Tipo>{tipo}</S.Tipo>
          <S.Nome>{nome}</S.Nome>
        </S.TextoSobreImagem>
      </div>
    </>
  )
}

export default HeaderRestaurant
