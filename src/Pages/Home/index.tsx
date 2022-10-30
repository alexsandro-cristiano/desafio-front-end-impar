import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Buttom } from '../../components/Buttom'
import { ContainerContent, WrapperCard } from './styles'
import { Card } from '../../components/Card'
import { useState } from 'react'

import { results } from '../../api/dados.js'

export function Home() {
  const mock = [...results]

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
          {mock.map(pokemon => {
            console.log(pokemon.name)
            return <Card name={pokemon.name} />
          })}
        </WrapperCard>
      </ContainerContent>
    </>
  )
}
