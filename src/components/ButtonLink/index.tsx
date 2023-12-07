import { ButtonLinkStyled } from './styles'
import React from 'react'

type Props = {
  title: string
  to: string
  children: string
}

const ButtonLink: React.FC<Props> = ({ title, to, children }) => {
  return (
    <ButtonLinkStyled to={to} title={title}>
      {children}
    </ButtonLinkStyled>
  )
}
export default ButtonLink
