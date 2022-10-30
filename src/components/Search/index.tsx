import LupaSvg from '../../assets/lupa.svg'
import { Container, WrapperSearch } from './styles'

interface ISearchProps {
  setSearch: any
}
export function Search({ setSearch }: ISearchProps) {
  return (
    <Container>
      <WrapperSearch>
        <input
          type="text"
          placeholder="Digite sua busca aqui..."
          onChange={e => setSearch(e.target.value)}
        />
        <img src={LupaSvg} />
      </WrapperSearch>
    </Container>
  )
}
