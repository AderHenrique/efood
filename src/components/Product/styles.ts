import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  max-width: 320px;
  padding: 8px;
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  color: ${cores.bege};
  padding-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.bege};
  line-height: 22px;
  padding-bottom: 8px;
`
