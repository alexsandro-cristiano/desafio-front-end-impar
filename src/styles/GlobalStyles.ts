import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 62.5%;
  background:  #f6f4f6;
}
body,
input,
textarea,
button {
  font-family: 'Poppins', sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}
::-webkit-scrollbar{
  width:0;
}
`
