import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Robo Slab', serif;
  margin: 0 auto;
  background-color: rgb(43, 41, 41);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url("../src/images/pageBackground.png");
}
`;