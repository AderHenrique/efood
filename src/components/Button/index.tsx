import * as S from './styles'

type ButtonType = 'cart' | 'addToCart' | 'link'

type Props = {
  type: ButtonType
  onClick?: () => void
  htmlType?: 'button' | 'submit' | 'reset'
  children?: string
}

const Button = ({ type, onClick, htmlType = 'button', children }: Props) => {
  switch (type) {
    case 'cart':
      return (
        <S.ButtonCart onClick={onClick} type={htmlType}>
          {children}
        </S.ButtonCart>
      )
    case 'addToCart':
      return (
        <S.AddToCart onClick={onClick} type={htmlType}>
          {children}
        </S.AddToCart>
      )
    case 'link':
      return (
        <S.ButtonLinkStyled onClick={onClick} type={htmlType}>
          {children}
        </S.ButtonLinkStyled>
      )
    default:
      return null
  }
}

export default Button
