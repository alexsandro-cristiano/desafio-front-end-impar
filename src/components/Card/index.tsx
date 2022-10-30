import DefaultImg from '../../assets/icon-hand.svg'
import IconTrash from '../../assets/icon-trash.svg'
import IconEdit from '../../assets/icon-edit.svg'
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
        <button>
          <img src={IconTrash} alt="Icone de exclusão"></img>
          Excluir
        </button>
        <Divider />

        <button>
          <img src={IconEdit} alt="Icone de exclusão"></img>
          Editar
        </button>
      </WrapperControl>
    </CardContainer>
  )
}
