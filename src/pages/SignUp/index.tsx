import React from "react";



import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";


import {Container, Content,Header} from './style';

const NewPassword: React.FC = () =>(
  <Container>
    <Header>
    <ButtonBack type = "submit">Voltar</ButtonBack>
    </Header>
    <Content>

      <h1>É novo por aqui? Faça seu cadastro.</h1>
             
     
      <form>        
        <Input name="nome" placeholder = "Nome:"/>

        <Input name="e-mail" placeholder = "E-mail: "/>

        <Input name="senha" type= "password" placeholder = "Senha: "/> 
        <a href="csv">
         Você também pode importar um arquivo CSV
        </a>

        <Button type="submit">Cadastrar</Button>       

      </form> 
      {/* <a href="csv">
         Você também pode importar um arquivo CSV
        </a>

        <Button type="submit">Cadastrar</Button> */}
      </Content>
      
  </Container>
);

export default NewPassword;