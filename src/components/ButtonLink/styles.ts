import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonLinkStyled = styled(Link)`
  color: ${cores.bege};
  background-color: ${cores.rosa};
  font-weight: 700;
  font-size: 14px;
  padding: 6px 4px;
  text-decoration: none;
  margin: 8px;
`
