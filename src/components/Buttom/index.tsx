import { Container } from './styles'

interface IButtomProps {
  text: string
}

export function Buttom({ text }: IButtomProps) {
  return <Container>{text}</Container>
}
