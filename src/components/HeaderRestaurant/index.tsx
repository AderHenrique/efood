import logo from '../../assets/images/logo.png'
import * as S from './styles'
import { Menu } from '../../pages/Restaurante'
import vectorImg from '../../assets/images/Vector.png'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  loja: Menu
}

const HeaderRestaurant = ({ loja }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const capa = loja.capa || ''
  const tipo = loja.tipo || ''
  const nome = loja.titulo || ''

  return (
    <>
      <S.Imagem style={{ backgroundImage: `url(${vectorImg})` }}>
        <S.Header className="container">
          <S.Link href="/">Restaurantes</S.Link>
          <img src={logo} alt="EFOOD" />
          <S.CartButton onClick={openCart}>
            0 - produto(s) no carrinho
          </S.CartButton>
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
