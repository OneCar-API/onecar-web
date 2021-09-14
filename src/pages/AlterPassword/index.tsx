import React from "react";



import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";


import {Container,  Background} from './style';

const AlterPassword: React.FC = () =>(
  <Container>   

    <Background/>

   
      <Logo/>
      <form>
        
        <Input name="email" placeholder="E-mail"/>

        <Button type="submit">Login</Button>

        
      </form>


   
   
    
  </Container>
);

export default AlterPassword;