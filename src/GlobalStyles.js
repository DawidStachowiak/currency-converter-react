import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import background from "./images/pageBackground.png";

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
  background-color: ${({ theme }) => theme.colors.blackOlive};;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url(${background});
}
`;