import Loja from '../Loja'
import Restaurante from '../models/Restaurante'
import * as S from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ListaLojas = ({ restaurantes }: Props) => (
  <S.Container>
    <S.List>
      {restaurantes.map((restaurante) => (
        <Loja
          key={restaurante.id}
          title={restaurante.title}
          category={restaurante.category}
          highlight={restaurante.highlight}
          note={restaurante.note}
          description={restaurante.description}
          image={restaurante.image}
          rote={restaurante.rote}
        />
      ))}
    </S.List>
  </S.Container>
)

export default ListaLojas
