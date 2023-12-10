import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.bege};
  text-align: center;
  padding-top: 40px;
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 32px;
`

export const Text = styled.p`
  text-aling: center;
  max-width: 480px;
  font-size: 10px;
  font-height: 12px;
  color: ${cores.rosa};
  padding-top: 80px;
  padding-bottom: 40px;
  margin: 0 auto;
`
