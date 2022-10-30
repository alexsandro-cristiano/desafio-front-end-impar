import LupaSvg from '../../assets/lupa.svg'
import { Container, WrapperSearch } from './styled'

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
