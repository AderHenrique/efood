import { Restaurante } from '../../pages/Home'
import Loja from '../Loja'
import * as S from './styles'

type Props = {
<<<<<<< HEAD
  restaurantes: Restaurantes[]
=======
  restaurantes: Restaurante[]
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05
}

const ListaLojas = ({ restaurantes }: Props) => (
  <S.Container>
    <S.List>
      {restaurantes.map((restaurante) => (
        <Loja
          key={restaurante.id}
          title={restaurante.titulo}
          category={restaurante.tipo}
          highlight={restaurante.destacado}
          note={restaurante.avaliacao}
          description={restaurante.descricao}
          image={restaurante.capa}
          rota={`${restaurante.id}`}
        />
      ))}
    </S.List>
  </S.Container>
)

export default ListaLojas
