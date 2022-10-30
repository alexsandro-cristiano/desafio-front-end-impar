import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Buttom } from '../../components/Buttom'
import { ContainerContent, WrapperCard } from './styles'

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
          <div>card</div>
        </WrapperCard>
      </ContainerContent>
    </>
  )
}
