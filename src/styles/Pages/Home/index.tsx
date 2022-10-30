import { Header } from '../../../components/Header'
import { Search } from '../../../components/Search'
import { ContainerContent, WrapperCard } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Search />
      <ContainerContent>
        <div>
          <h2>Resultado da busca</h2>
          <button>Novo Card</button>
        </div>
        <WrapperCard>
          <div>
            <section>
              <div>
                <img src="" />
              </div>
              <p>Title</p>
            </section>
            <section>
              <button>1</button>
              <button>2</button>
            </section>
          </div>
        </WrapperCard>
      </ContainerContent>
    </>
  )
}
