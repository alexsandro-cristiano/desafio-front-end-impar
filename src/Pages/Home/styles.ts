import styled from 'styled-components'

export const ContainerContent = styled.main`
  margin: 3.2rem auto;
  width: 1056px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 32px;
      color: #5f1478;
      font-weight: 400;
    }
  }
`
export const WrapperCard = styled.section`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 37px;
`
