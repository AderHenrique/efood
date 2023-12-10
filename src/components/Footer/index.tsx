import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <img src={logo} alt="EFOOD" />
    <S.Links>
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
    </S.Links>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Text>
  </S.Container>
)

export default Footer
