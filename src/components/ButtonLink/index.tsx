import * as S from './styles'
import React from 'react'

type Props = {
  title: string
  to: string
  children: string
}

const ButtonLink: React.FC<Props> = ({ title, to, children }) => {
  return (
    <S.ButtonLinkStyled to={to} title={title}>
      {children}
    </S.ButtonLinkStyled>
  )
}
export default ButtonLink
