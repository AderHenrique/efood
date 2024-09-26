import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { Menu } from '../../pages/Restaurante'
import { open } from '../../store/reducers/cart'

import vectorImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

type Props = {
  loja: Menu
}

const HeaderRestaurant = ({ loja }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

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
          <S.Link to="/">Restaurantes</S.Link>
          <img src={logo} alt="EFOOD" />
          <S.OpenCart onClick={openCart}>
            {items.length} - produto(s) no carrinho
          </S.OpenCart>
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
