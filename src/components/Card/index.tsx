import { useState } from 'react'
import DefaultImg from '../../assets/icon-hand.svg'
import IconTrash from '../../assets/icon-trash.svg'
import IconEdit from '../../assets/icon-edit.svg'
import { APIPokemon } from '../../api/api'
import {
  CardContainer,
  Divider,
  ImgContainer,
  Text,
  WrapperContent,
  WrapperControl
} from './styles'

interface ICardProps {
  name: string
}

export function Card({ name }: ICardProps) {
  const [image, setImage] = useState('')

  const getPokemonData = async () => {
    const res = await APIPokemon.get(`${name}`)
    setImage(res.data.sprites.other.home.front_default)
  }

  getPokemonData()
  return (
    <CardContainer>
      <WrapperContent>
        <ImgContainer>
          <img
            src={image ? image : DefaultImg}
            alt={image ? name : 'image default'}
          />
        </ImgContainer>
        <Divider />
        <Text>{name}</Text>
      </WrapperContent>
      <WrapperControl>
        <button>
          <img src={IconTrash} alt="Icone de exclusão"></img>
          Excluir
        </button>
        <Divider />

        <button>
          <img src={IconEdit} alt="Icone de edição"></img>
          Editar
        </button>
      </WrapperControl>
    </CardContainer>
  )
}
