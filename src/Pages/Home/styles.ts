import styled from 'styled-components'

interface ContainerProps {
  isModalOpen: boolean
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${props => (props.isModalOpen ? '100vh;' : '100%;')};
  overflow: ${props => (props.isModalOpen ? 'hidden;' : 'auto;')};
  padding-bottom: 50px;
`

export const Article = styled.article`
  margin: auto;
  width: 75%;
  height: 100%;
`
const SectionBase = styled.section`
  margin: 32px auto;
  display: flex;

  button {
    padding: 12px 40px;
    color: #ffff;
    font-weight: 800;
    background: #e76316;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #92207242;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      opacity: 0.9;
    }
    :active {
      transform: scale(0.9);
    }
  }
`
export const SectionHeader = styled(SectionBase)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 32px;
    color: #5f1478;
  }
  button {
    font-size: 18px;
  }
`

export const SectionFooter = styled(SectionBase)`
  justify-content: center;
  button {
    font-size: 16px;
  }
`
export const WrapperCard = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 37px;

  span {
    color: #5f1478;
    font-size: 16px;
    font-weight: 500;

    margin: 50px 0;
  }
`
