import styled from 'styled-components'

import fundoBusca from '../../assets/fundo-busca.png'

export const Container = styled.div`
  width: 100%;
  height: 261px;
  background-image: url(${fundoBusca});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const WrapperSearch = styled.div`
  margin-top: 83px;
  width: 1046px;
  height: 76px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;
    padding: 2.3rem 2.8rem;
    font-size: 1.4rem;
    background-color: #fff;
    border-radius: 8px;
    border: none;
    outline: none;
    transition: all 0.3s;
    &::placeholder {
      color: #757575;
    }
    &:hover::placeholder {
      color: #263238;
    }
  }
  img {
    display: block;
    width: 49px;
    height: 49px;
    position: absolute;
    right: 25px;
    pointer-events: none;
  }
`
