import styled from 'styled-components'
import { cores } from '../../styles'

const sharedStyles = `
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
  text-align: center;
  border: none;
  cursor: pointer;
`

export const ButtonCart = styled.button`
  ${sharedStyles}
  background-color: ${cores.bege};
  color: ${cores.rosa};
  width: 100%;
`

export const AddToCart = styled.button`
  ${sharedStyles}
  background-color: ${cores.bege};
  color: ${cores.rosa};
  max-width: 218px;
`

export const ButtonLinkStyled = styled.button`
  ${sharedStyles}
  background-color: ${cores.rosa};
  color: ${cores.bege};
  padding: 6px 4px;
  margin-left: 8px;
`
