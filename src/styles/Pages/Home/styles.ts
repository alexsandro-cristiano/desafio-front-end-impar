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
    button {
      width: 173px;
      height: 48px;

      background: #e76316;
      box-shadow: 0px 3px 6px #92207242;
      border-radius: 8px;

      color: #fff;
      font-size: 18px;
      font-weight: 700;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
`
export const WrapperCard = styled.section`
  padding: 0.2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3.7rem;
`
