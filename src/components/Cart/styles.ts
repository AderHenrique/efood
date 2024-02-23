import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.bege};
  padding: 40px 0 16px 0;
`

export const Card = styled.div`
  display: grid;
  gap: 16px;
`
export const Item = styled.div`
  background-color: ${cores.bege};
  display: flex;
  padding: 8px;
  gap: 8px;
`
export const ItemInfos = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 8px;
  color: ${cores.rosa};
  p {
    font-size: 14px;
  }
`
export const LixeiraIcon = styled.img`
  margin-left: 220px;
  cursor: pointer;
`
