import styled from 'styled-components'
import OutsideClickHandler from 'react-outside-click-handler'

interface ContainerProps {
  modalSelector: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  align-items: ${props =>
    props.modalSelector === 'criar-card-modal' ? 'flex-start' : 'center'};
  display: flex;
  justify-content: center;

  background: #f6f4f6cc;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
`

export const OutsideClick = styled(OutsideClickHandler)``
