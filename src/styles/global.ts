
import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #E5E5E5;
  --blue: #5E9DBC; // cor dos botões
  --gray: rgba(242, 242, 242, 0.9);
  --darkGray: #494949; 
  --white: #f9f9f9; // cor do texto dos botões
  --text-field: #787878; //cor dos título dos campos da tela exibição de 1 anúncio
  --text-information: #808080; //cor das informações ano/cidade/km da tela exibição de anúncios
  --text: #383838; // cor padrão dos textos
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: var(---background);
  color: var(---text);
  font: 400 16px "Nunito", sans-serif;
}



`