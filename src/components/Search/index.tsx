import LupaSvg from '../../assets/lupa.svg'
import { Container, WrapperSearch } from './styles'

export function Search() {
  return (
    <Container>
      <WrapperSearch>
        <input type="text" placeholder="Digite sua busca aqui..." />
        <img src={LupaSvg} />
      </WrapperSearch>
    </Container>
  )
}
