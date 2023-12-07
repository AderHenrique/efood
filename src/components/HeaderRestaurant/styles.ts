import styled from 'styled-components'
import { cores } from '../../styles'
import ImgRestaurante from '../../assets/images/TrattoriaVector.png'

export const Imagem = styled.div`
  width: 100%;
  background-repeat: repeat;
  height: 186px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 65px;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 900;
`
export const Link = styled.a`
  color: ${cores.rosa};
`

export const LogoRestaurante = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${ImgRestaurante});
  background-size: cover;
  filter: brightness(50%);
`

export const Tipo = styled.p`
  font-weight: 100;
  padding-bottom: 156px;
`
export const Nome = styled.h3`
  font-weight: 900;
`

export const TextoSobreImagem = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 1);
  padding-left: 170px;
  top: 220px;
`
