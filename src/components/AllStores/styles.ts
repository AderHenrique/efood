import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  background-color: #fff8f2;
  padding-top: 80px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 48px 80px;
  }
`
