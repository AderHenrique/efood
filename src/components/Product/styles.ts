import styled from 'styled-components'
import { cores } from '../../styles'

interface OverlayProps {
  isOpen: boolean
}

export const Card = styled.div`
  background-color: ${cores.rosa};
  width: 320px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  color: ${cores.bege};
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.bege};
  line-height: 22px;
`
export const Image = styled.img`
  width: 304px;
  height: 167px;
`

export const Modal = styled.div`
  position: fixed;
  width: 1024px;
  height: 344px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: ${cores.rosa};
  color: ${cores.branco};
`

export const ModalContent = styled.div`
  display: flex;
  padding: 8px 32px;
  gap: 32px;
`
export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
`

export const ImgComida = styled.img`
  width: 280px;
  height: 280px;
`
export const Imgfechar = styled.img`
  position: relative;
  left: 1000px;
  top: 8px;
  cursor: pointer;
`

export const Infos = styled.div`
  display: grid;
  gap: 16px;
  width: 656px;
  height: 176px;
  h3 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
  }
  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
`
