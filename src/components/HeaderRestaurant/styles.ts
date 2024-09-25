import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Link as RouterLink } from 'react-router-dom'

export const Imagem = styled.div`
  width: 100%;
  background-repeat: repeat;
  height: 186px;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 900;
  padding: 63px 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    gap: 12px;
  }
`
export const Link = styled(RouterLink)`
  color: ${cores.rosa};
`

export const LogoRestaurante = styled.div`
  width: 100%;
  height: 280px;
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
  top: 200px;
  font-size: 32px;
`

export const CartButton = styled.a`
  cursor: pointer;
`
