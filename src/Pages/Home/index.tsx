import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Buttom } from '../../components/Buttom'
import { ContainerContent, WrapperCard } from './styles'
import { Card } from '../../components/Card'

export function Home() {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </WrapperCard>
      </ContainerContent>
    </>
  )
}
