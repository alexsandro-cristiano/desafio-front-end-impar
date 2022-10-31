import CriarCard from './components/CriarCard'
import Excluir from './components/Excluir'

import { Container, OutsideClick } from './styles'

interface IModalProps {
  active: boolean
  setActive: any
  type: string
}

export function Modal({ active, setActive, type }: IModalProps) {
  if (type === 'criar-card-modal' && active) {
    return (
      <Container key={type} modalSelector={type}>
        <OutsideClick onOutsideClick={() => setActive(false)}>
          <CriarCard />
        </OutsideClick>
      </Container>
    )
  }

  //MODAL EXCLUIR CARD
  if (type === 'excluir-card-modal' && active) {
    return (
      <Container modalSelector={type}>
        <OutsideClick onOutsideClick={() => setActive(false)}>
          <Excluir setActive={setActive} />
        </OutsideClick>
      </Container>
    )
  }

  return null
}
