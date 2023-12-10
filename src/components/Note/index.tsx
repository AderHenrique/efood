import star from '../../assets/images/Page-1.png'
import * as S from './styles'

type Props = {
  children: number
}

const Note = ({ children }: Props) => (
  <S.NoteContainer>
    <p>{children}</p>
    <img src={star} alt="Estrela" />
  </S.NoteContainer>
)

export default Note
