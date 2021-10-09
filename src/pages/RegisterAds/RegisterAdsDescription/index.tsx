import { Form } from "@unform/web";
import React,  { useCallback, useRef }  from "react";

import { FormHandles } from '@unform/core';

import { FiSearch} from 'react-icons/fi';
import {Container,
  Content,
  Header,
  HeaderContent,
  First, 
  Profile, 
IconVoltar} from './style'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import TextArea from '../../../components/TextArea'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';


const RegisterAdsDescription: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data:object):void{
    console.log(data);
  }
  return(
    <Container> 
      <Header>
        <HeaderContent>
          <IconVoltar>
            <button type='submit'><img src={back} alt="Voltar" /></button>
          </IconVoltar>  
          <img src={logoImg} alt="OneCar" />

          <First>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </First>

          <Profile>
            <img src={avatar} alt="User" />
          </Profile>
        </HeaderContent>
      </Header>
      <Content>    
        <h1>Pra finalizar, vamos aos detalhes do seu anúncio!</h1>
      

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título do anúncio" />

          <TextArea title="Descrição" cols={60} rows={4}>
            Descrição
          </TextArea>
                    

          <h2>Inserir imagens: (Limite de 6 imagens)</h2>                       

          <Button type="submit">Finalizar</Button>
        </Form>
      </Content>      
    </Container>


  )
}

export default RegisterAdsDescription;
