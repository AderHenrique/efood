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
  height: 100%;
  padding: 16px;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.bege};
  padding: 40px 0 16px 0;
`

export const Card = styled.ul`
  width: 100%;
  display: grid;
  gap: 16px;
  padding: 32px 0 0 0;
`

export const Item = styled.li`
  background-color: ${cores.bege};
  display: flex;
  padding: 12px;
  position: relative;
`

export const ItemInfos = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 8px;
  color: ${cores.rosa};
  padding-left: 8px;
  p {
    font-size: 14px;
    font-weight: 400;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
  }
`

export const LixeiraIcon = styled.img`
  cursor: pointer;
  height: 16px;
  width: 16px;
  position: absolute;
  bottom: 12px;
  right: 12px;
`

export const img = styled.img`
  height: 100px;
  width: 100px;
`
