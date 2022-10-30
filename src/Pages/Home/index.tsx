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

  const filteredPokemon =
    search.length > 0
      ? pokemons.filter(pkm => pkm['name'].includes(search.toLocaleLowerCase()))
      : []

  //Consumo da API Pokemon
  const getPokemons = async () => {
    await APIPokemon.get('').then(res => {
      setPokemons(res.data.results)
      setIsLoading(false)
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
      </ContainerContent>
    </>
  )
}
