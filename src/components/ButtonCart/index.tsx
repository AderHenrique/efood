import * as S from './styles'

type Props = {
  type: 'cart' | 'infos' | 'buy'
  onClick: () => void
  valor?: string
  children?: string
}

const ButtonCart = ({ type, valor, onClick, children }: Props) => {
  if (type === 'cart') {
    return <S.CartButton onClick={onClick}>Mais detalhes</S.CartButton>
  }
  if (type === 'infos') {
    return (
      <S.CartInfos onClick={onClick}>
        Adicionar ao carrinho - {valor}
      </S.CartInfos>
    )
  }
  if (type === 'buy') {
    return <S.CartBuy onClick={onClick}>{children}</S.CartBuy>
  }
  return null
}

export default ButtonCart
