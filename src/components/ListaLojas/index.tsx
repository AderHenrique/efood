import { Restaurantes } from '../../pages/Home'
import Loja from '../Loja'
import * as S from './styles'

type Props = {
  restaurante: Restaurantes[]
}

const ListaLojas = ({ restaurante }: Props) => (
  <S.Container>
    <S.List>
      {restaurante.map((restaurantes) => (
        <Loja
          key={restaurantes.id}
          title={restaurantes.titulo}
          category={restaurantes.tipo}
          highlight={restaurantes.destacado}
          note={restaurantes.avaliacao}
          description={restaurantes.descricao}
          image={restaurantes.capa}
          rota={`${restaurantes.id}`}
        />
      ))}
    </S.List>
  </S.Container>
)

export default ListaLojas
