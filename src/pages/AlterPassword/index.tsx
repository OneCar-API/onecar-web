import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";

import {Container, Content,Header} from './style';

const AlterPassword: React.FC = () =>(
  <Container>
    <Header>
    <ButtonBack type = "submit">Voltar</ButtonBack>
    </Header>
    <Content>
             
      <Logo/>

      <form>        
        <Input name="email" placeholder="E-mail"/>

        <Button type="submit">Próximo</Button>

      </form>  
      </Content>  
  </Container>
);

export default AlterPassword;