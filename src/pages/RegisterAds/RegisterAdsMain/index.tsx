
import React,  { useCallback, useRef }  from "react";
import { Link, useHistory } from 'react-router-dom';

import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';

// import * as Yup from 'yup;'

import { FiSearch} from 'react-icons/fi';
import {Container,Content,Header,HeaderContent,First, Profile, IconVoltar} from './style'


import Input from '../../../components/Input'
import Button from '../../../components/Button'

import marca from '../../../assets/images/marca.svg'
import modelo from '../../../assets/images/car.svg'
import year from '../../../assets/images/year.svg'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';



const RegisterAds: React.FC = () => {
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
        <h1>Conta pra gente sobre o seu carro!</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <div>
            <img id="marca" src={marca} alt="Marca do veículo" />
            <Input name="marca" placeholder="Marca" />
          </div>

          <div>
            <img className="modelo" src={modelo} alt="Modelo do veículo" />
            <Input name="modelo" placeholder="Modelo" />
          </div>

          <div>
            <img id="year" src={year} alt="Ano do veículo" />
            <Input name="ano" placeholder="Ano" />
          </div>

          <Button type="submit">Próximo</Button>
        </Form>
      </Content>
    </Container>


  )
}

export default RegisterAds;
