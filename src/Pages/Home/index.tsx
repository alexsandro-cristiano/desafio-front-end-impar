import { useEffect, useState } from 'react'
import { APIPokemon } from '../../api/api'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import {
  Article,
  Container,
  SectionFooter,
  SectionHeader,
  WrapperCard
} from './styles'

interface IPokemonsProps {
  name: any
  url: any
}
export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState<IPokemonsProps[]>([])
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState(0)

  const filteredPokemon =
    search.length > 0
      ? pokemons.filter(pkm => pkm['name'].includes(search.toLocaleLowerCase()))
      : []

  //Consumo da API Pokemon
  const getPokemons = async () => {
    await APIPokemon.get('').then(res => {
      console.log(res)
      setPokemons(res.data.results)
      setPagination(20)
      setIsLoading(false)
    })
  }
  const getMorePokemons = async () => {
    await APIPokemon.get(`?offset=${pagination}&limit=20`).then(res => {
      res.data.results.map((item: { name: any; url: any }) => {
        const pkmTemp = {
          name: item.name,
          url: item.url
        }
        setPokemons(old => [...old, pkmTemp])
      })
      setPagination(old => old + 20)
    })
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <Container isModalOpen={false}>
      <Header />
      <Search setSearch={setSearch} />

      <Article>
        <SectionHeader>
          <h2>Resultado da busca</h2>
          <button>Novo Card</button>
        </SectionHeader>
        <WrapperCard>
          {isLoading ? (
            <span>Loading...</span>
          ) : search.length > 0 ? (
            filteredPokemon.map(pkm => {
              return <Card key={pkm.name} name={pkm.name} />
            })
          ) : (
            pokemons.map(pkm => {
              return <Card key={pkm.name} name={pkm.name} />
            })
          )}
        </WrapperCard>
        <SectionFooter>
          {isLoading ? (
            ''
          ) : (
            <button
              onClick={() => {
                getMorePokemons()
              }}
            >
              Carregar Mais Pokemons
            </button>
          )}
        </SectionFooter>
      </Article>
    </Container>
  )
}
