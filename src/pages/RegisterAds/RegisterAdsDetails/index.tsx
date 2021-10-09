import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";

import { FormHandles } from '@unform/core';

import { FiSearch} from 'react-icons/fi';
import {Container,Content,Header,HeaderContent,First, Profile,IconVoltar} from './style'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

import color from '../../../assets/images/color.svg'
import km from '../../../assets/images/km.svg'
import motor from '../../../assets/images/motor.svg'
import shift from '../../../assets/images/shift.svg'
import direction from '../../../assets/images/direction.svg'
import door from '../../../assets/images/door.svg'
import fuel from '../../../assets/images/fuel.svg'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';


const RegisterAdsDetails: React.FC = () => {
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
      <h1>Vamos agora para os detalhes do seu carro!</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>

        <div>
          <img src={color} alt="Cor do veículo" />
          <Input name="color" placeholder="Cor" />
        </div>

        <div>
          <img src={km} alt="Quilometragem do veículo" />
          <Input name="km" placeholder="Quilometragem" />
        </div>

        <div>
          <img src={motor} alt="Motor do veículo" />
          <Input name="motor" placeholder="Motor" />
        </div>

        <div>
          <img src={shift} alt="Câmbio do veículo" />
          <Input name="shift" placeholder="Câmbio" />
        </div>

        <div>
          <img src={direction} alt="Tipo de Direção do veículo" />
          <Input name="direction" placeholder="Direção" />
        </div>

        <div>
          <img src={door} alt="Quantidade de portas do veículo" />
          <Input name="door" placeholder="Portas" />
        </div>

        <div>
          <img src={fuel} alt="Tipo de combustível do veículo" />
          <Input name="fuel" placeholder="Combustível" />
        </div>

        <Button type="submit">Próximo</Button>
      </Form>
    </Content>
  </Container>

)
}

export default RegisterAdsDetails;

