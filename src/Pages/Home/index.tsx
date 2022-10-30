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
      <Search />
      <ContainerContent>
        <div>
          <h2>Resultado da busca</h2>
          <Buttom text={'Novo Card'} />
        </div>
        <WrapperCard>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            pokemons.map(pokemon => {
              return <Card key={pokemon.name} name={pokemon.name} />
            })
          )}
        </WrapperCard>
      </ContainerContent>
    </>
  )
}
