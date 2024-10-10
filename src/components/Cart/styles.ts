import styled from 'styled-components'
import { cores } from '../../styles'

interface InputGroupProps {
  $maxWidth?: string
}

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

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 16px;

    &.bege {
      color: ${cores.bege};
    }

    &.rosa {
      color: ${cores.rosa};
    }
  }

  p {
    &.bege {
      color: ${cores.bege};
      line-height: 22px;
      margin-bottom: 8px;
    }
  }
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

  object-fit: cover;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.$maxWidth || 'none'};

  label {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.bege};
    color: ${cores.preto};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.bege};
    width: 100%;
    margin-bottom: 8px;

    font-size: 14px;
    font-weight: 700;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 34px;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 8px;
`

export const ErrorMessage = styled.p`
  color: ${cores.preto};
  text-align: center;
  padding: 8px 0;
  margin-top: 4px;
  display: block;
`
