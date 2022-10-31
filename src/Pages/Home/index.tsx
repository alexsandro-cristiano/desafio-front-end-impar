import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Buttom } from '../../components/Buttom'
import { Card } from '../../components/Card'

import { APIPokemon } from '../../api/api'

import { ContainerContent, WrapperCard } from './styles'

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
    <>
      <Header />
      <Search setSearch={setSearch} />
      <ContainerContent>
        <div>
          <h2>Resultado da busca</h2>
          <Buttom text={'Novo Card'} />
        </div>
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
        <div className="btn">
          <button
            onClick={() => {
              getMorePokemons()
            }}
          >
            Ver +
          </button>
        </div>
      </ContainerContent>
    </>
  )
}
