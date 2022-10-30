import { Container } from './styles'
import LogoImg from '../../assets/logo.png'
export function Header() {
  return (
    <Container>
      <img src={LogoImg} title={'Logo Teste Ímpar'} />
    </Container>
  )
}
