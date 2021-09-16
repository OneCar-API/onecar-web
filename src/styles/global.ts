
import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
:root{
  --background: #ffffff;
  --blue: #5E9DBC; // cor dos botões
  --gray: rgba(242, 242, 242, 0.9);
  --darkGray: #494949; 
  --white: #f9f9f9; // cor do texto dos botões
  --text-field: #787878; //cor dos título dos campos da tela exibição de 1 anúncio
  --text-information: #808080; //cor das informações ano/cidade/km da tela exibição de anúncios
  --text: #383838; // cor padrão dos textos
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  color: var(---text);

}

body, input, button{
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}

h1,h2,h3,h4,h4,h6,strong{
  font-weight: 600;
}

button{
  cursor: pointer;
}


@media(max-width: 1980px) {
    html {
      font-size: 81.25%;
    }
  }
  @media(max-width: 1680px) {
    html {
      font-size: 78.125%;
    }
  }
  @media(max-width: 1440px) {
    html {
      font-size: 75%;
    }
  }
  @media(max-width: 1360px) {
    html {
      font-size: 68.75%;
    }
  }
  @media(max-width: 1280px) {
    html {
      font-size: 62.5%;
    }
  }
  @media(max-width: 1024px) {
    html {
      font-size: 56.25%;
    }
  }
  @media(max-width: 960px) {
    html {
      font-size: 50%;
    }
  }


`