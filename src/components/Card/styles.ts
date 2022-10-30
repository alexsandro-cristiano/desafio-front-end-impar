import styled from 'styled-components'

export const CardContainer = styled.div`
  overflow: hidden;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 3px 6px #e5e5e5;

  display: flex;
  flex-direction: column;
`
export const WrapperContent = styled.section`
  padding: 1.2rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
`
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background: #f6f4f6;
  border: 1px solid #e4e4e4;

  img {
    width: 100%;
    border-radius: 50%;
  }
`

export const Divider = styled.div`
  width: 80%;
  height: 5px;
  border-top: 1px solid #e4e4e4;
`
export const Text = styled.p`
  width: 191px;
  height: 40px;
  text-align: center;
  font: normal normal normal 16px/20px Muli;
  color: #263238;
`
export const WrapperControl = styled.section`
  background: gainsboro;
  width: 100%;
`
