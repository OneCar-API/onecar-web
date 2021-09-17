import React,{useRef, useCallback} from "react";
import{FiLogIn} from 'react-icons/fi';

import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';

import * as Yup from 'yup';

import getValidationErrors from "../../utils/getValidationErros";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";


import {Container, Content,Background} from './styles';
import { error } from "console";

const SignIn: React.FC = () =>{
  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async(data: object)=>{
    try{
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      })

    
    await schema.validate(data,{
      abortEarly: false,
    });
    }
    catch(error){   
      if(error instanceof Yup.ValidationError){
        const errors = getValidationErrors(error); 
      formRef.current?.setErrors(errors);
      }
  }
}, []);


  

  return(
  <Container>   

    <Background/>

    <Content>
      <Logo/>
      <Form ref= {formRef}onSubmit={handleSubmit}>
        
        <Input name="email" placeholder="E-mail"/>

        <Input name= "password" type= "password" placeholder="Senha" />

        <a href="forgot">Esqueceu sua senha?</a>
        
        <Button type="submit">Login</Button>
        
      </Form>

      <a href="login">
        <FiLogIn/>
        Criar conta
        </a>

    </Content>
    
  </Container>
);
  }

export default SignIn;