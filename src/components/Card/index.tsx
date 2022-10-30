import DefaultImg from '../../assets/icon-hand.svg'
import {
  CardContainer,
  Divider,
  ImgContainer,
  Text,
  WrapperContent,
  WrapperControl
} from './styles'
export function Card() {
  return (
    <CardContainer>
      <WrapperContent>
        <ImgContainer>
          <img src={DefaultImg} alt="imagem"></img>
        </ImgContainer>
        <Divider />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
      </WrapperContent>
      <WrapperControl>
        <button>1</button>
        <button>2</button>
      </WrapperControl>
    </CardContainer>
  )
}
