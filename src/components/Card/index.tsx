import { useState } from 'react'
import DefaultImg from '../../assets/icon-hand.svg'
import IconTrash from '../../assets/icon-trash.svg'
import IconEdit from '../../assets/icon-edit.svg'
import { APIPokemon } from '../../api/api'
import {
  CardContainer,
  Divider,
  ErrorMessage,
  ImgContainer,
  Text,
  WrapperContent,
  WrapperControl
} from './styles'

export function Card(props: any) {
  const [image, setImage] = useState('')
  const [showError, setShowError] = useState(false)

  const getPokemonData = async () => {
    const res = await APIPokemon.get(`${props.name}`)
    setImage(res.data.sprites.other.home.front_default)
  }

  getPokemonData()
  return (
    <CardContainer>
      <WrapperContent>
        <ImgContainer>
          <img
            src={image ? image : DefaultImg}
            alt={image ? props.name : 'image default'}
          />
        </ImgContainer>
        <Divider />
        <Text>{props.name}</Text>
      </WrapperContent>

      {showError ? (
        <ErrorMessage>Função ainda não implementada</ErrorMessage>
      ) : null}

      <WrapperControl>
        <button onClick={() => props.setActive(true)}>
          <img src={IconTrash} alt="Icone de exclusão"></img>
          Excluir
        </button>
        <Divider />

        <button onClick={() => setShowError(!showError)}>
          <img src={IconEdit} alt="Icone de edição"></img>
          Editar
        </button>
      </WrapperControl>
    </CardContainer>
  )
}
