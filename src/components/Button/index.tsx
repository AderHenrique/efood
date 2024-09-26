import * as S from './styles'

type ButtonType = 'cart' | 'addToCart' | 'link'

type Props = {
  type: ButtonType
  onClick?: () => void
  children?: string
}

const Button = ({ type, onClick, children }: Props) => {
  switch (type) {
    case 'cart':
      return <S.ButtonCart onClick={onClick}>{children}</S.ButtonCart>
    case 'addToCart':
      return <S.AddToCart onClick={onClick}>{children}</S.AddToCart>
    case 'link':
      return (
        <S.ButtonLinkStyled onClick={onClick}>{children}</S.ButtonLinkStyled>
      )
    default:
      return null
  }
}

export default Button
