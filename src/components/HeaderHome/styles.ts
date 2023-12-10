import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 160px;
`
export const Texto = styled.h2`
  max-width: 539px;
  max-height: 84px;
  text-align: center;
  font-weight: 900;
  font-size: 36px;
  color: ${cores.rosa};
`
