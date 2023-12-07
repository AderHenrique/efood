import { Imagem, Texto } from './styles'

import vectorImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const HeaderHome = () => (
  <Imagem style={{ backgroundImage: `url(${vectorImg})` }}>
    <div>
      <img src={logo} alt="EFOOD" />
    </div>
    <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
  </Imagem>
)

export default HeaderHome
