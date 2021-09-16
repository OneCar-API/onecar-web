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
             
      <Logo/>

      <form>        
        <Input name="newpassword" type= "password" placeholder = "Insira a nova senha"/>

        <Input name="confirmpassword" type= "password" placeholder = "Confirme a nova senha"/>

        <Button type="submit">Confirmar</Button>

      </form>  
      </Content>  
  </Container>
);

export default NewPassword;