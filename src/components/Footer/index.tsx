import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import { Container, Links, Text } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="EFOOD" />
    <Links>
      <li>
        <a href="/">
          <img src={insta}></img>
        </a>
      </li>
      <li>
        <a href="/">
          <img src={face}></img>
        </a>
      </li>
      <li>
        <a href="/">
          <img src={twitter}></img>
        </a>
      </li>
    </Links>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Text>
  </Container>
)

export default Footer
