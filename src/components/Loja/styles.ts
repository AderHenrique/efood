import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: solid 1px ${cores.rosa};
  max-width: 472px;
  position: relative;
  padding-bottom: 12px;
`
export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
  color: ${cores.rosa};
`
export const HeaderLoja = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 8px 16px 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  padding: 8px 8px 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
