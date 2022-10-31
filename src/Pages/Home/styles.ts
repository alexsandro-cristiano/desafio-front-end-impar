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
  .btn {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 10rem;
      height: 2.5rem;

      background: #82cd47;
      box-shadow: 0px 3px 6px #92207242;
      border-radius: 8px;

      color: #fff;
      font-size: 18px;
      font-weight: 700;
      border: none;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
        background: #bce29e;
      }
    }
  }
`
export const WrapperCard = styled.section`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 37px;

  span {
    text-align: left;
    font-size: 16px;
    font-weight: 600;
  }
`
