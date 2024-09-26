import { Restaurante } from '../../pages/Home'
import Loja from '../StoreCard'

import * as S from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const AllStores = ({ restaurantes }: Props) => (
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

export default AllStores
