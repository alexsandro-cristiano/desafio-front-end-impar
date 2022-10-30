import { Container, WrapperSearch } from './styled'

export function Search() {
  return (
    <Container>
      <WrapperSearch>
        <input type="text" placeholder="Digite sua busca aqui..." />
      </WrapperSearch>
    </Container>
  )
}
