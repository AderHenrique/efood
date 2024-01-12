import * as S from './styles'

type Props = {
  type: 'cart' | 'infos'
  onClick: () => void
  valor?: string
}

const ButtonCart = ({ type, valor, onClick }: Props) => {
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
  return null
}

export default ButtonCart
