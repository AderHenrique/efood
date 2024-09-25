import vectorImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

const HeaderHome = () => (
  <S.Imagem style={{ backgroundImage: `url(${vectorImg})` }}>
    <S.Logo>
      <img src={logo} alt="EFOOD" />
    </S.Logo>
    <S.Texto>Viva experiências gastronômicas no conforto da sua casa</S.Texto>
  </S.Imagem>
)

export default HeaderHome
