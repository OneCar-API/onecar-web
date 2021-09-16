import React from "react";
import{FiLogIn} from 'react-icons/fi';


import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";


import {Container, Content, Background} from './styles';

const SignIn: React.FC = () =>(
  <Container>   

    <Background/>

    <Content>
      <Logo/>
      <form>
        
        <Input name="email" placeholder="E-mail"/>

        <Input name= "password" type= "password" placeholder="Senha" />

        <a href="forgot">Esqueceu sua senha?</a>
        
        <Button type="submit">Login</Button>
        
      </form>

      <a href="login">
        <FiLogIn/>
        Criar conta
        </a>

    </Content>
    
  </Container>
);

export default SignIn;