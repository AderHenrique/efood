import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  children: string
}

const ButtonLink: React.FC<Props> = ({ title, children }) => {
  return <S.ButtonLinkStyled title={title}>{children}</S.ButtonLinkStyled>
}

export default ButtonLink
