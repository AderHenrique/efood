import star from '../../assets/images/Page-1.png'
import { NoteContainer } from './styles'

type Props = {
  children: number
}

const Note = ({ children }: Props) => (
  <NoteContainer>
    <p>{children}</p>
    <img src={star} alt="Estrela" />
  </NoteContainer>
)

export default Note
