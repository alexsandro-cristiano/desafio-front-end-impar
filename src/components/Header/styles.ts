import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1.2rem;

  background: linear-gradient(
    90deg,
    rgba(108, 23, 118, 1) 25%,
    rgba(131, 28, 116, 1) 65%,
    rgba(158, 35, 113, 1) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  position: fixed;
  z-index: 5;
  img {
    display: block;
    height: 2.5rem;
  }
`
