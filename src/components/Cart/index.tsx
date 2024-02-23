import ButtonCart from '../ButtonCart'
import * as S from './styles'
import lixeria from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleClick = () => {} // Função vazia

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.Card>
          <S.Item>
            <img
              src="https://via.placeholder.com/80x80"
              alt="Imagem de espaço reservado 80x80"
            />
            <S.ItemInfos>
              <h3>Nome produto</h3>
              <p>R$ 60,90</p>
              <S.LixeiraIcon src={lixeria} />
            </S.ItemInfos>
          </S.Item>
          <S.Item>
            <img
              src="https://via.placeholder.com/80x80"
              alt="Imagem de espaço reservado 80x80"
            />
            <S.ItemInfos>
              <h3>Nome produto</h3>
              <p>R$ 60,90</p>
              <S.LixeiraIcon src={lixeria} />
            </S.ItemInfos>
          </S.Item>
          <S.Item>
            <img
              src="https://via.placeholder.com/80x80"
              alt="Imagem de espaço reservado 80x80"
            />
            <S.ItemInfos>
              <h3>Nome produto</h3>
              <p>R$ 60,90</p>
              <S.LixeiraIcon src={lixeria} />
            </S.ItemInfos>
          </S.Item>
        </S.Card>
        <S.Price>
          <div>
            <p>Valor total</p>
          </div>
          <div>
            <p>R$ 189,00</p>
          </div>
        </S.Price>
        <ButtonCart type="buy" onClick={handleClick}>
          Continuar com a entrega
        </ButtonCart>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
