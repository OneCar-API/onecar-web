import { Form } from "@unform/web";
import React, { useCallback, useRef, useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Header, HeaderContent, First, Profile, IconVoltar } from './style'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Dropdown from '../../../components/Dropdown'

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
import getValidationErrors from "../../../utils/getValidationErrors";
import { useAuth } from "../../../hooks/auth";

interface RegisterAdsDetailsFormData {
  color: string;
  km: string;
  shift: string;
  direction: string;
  fuel: string;
}

interface RegisterAdsFormData {
  brand: string;
  model: string;
  year: string;
}

const RegisterAdsDetails: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { state } = useLocation<RegisterAdsFormData>();

  const history = useHistory();

  const { signOut } = useAuth();

  const [dropdownActive, setDropdownActive] = useState(false);

  const handleSubmit = useCallback(
    async (data: RegisterAdsDetailsFormData) => {

      try {
        console.log(state)
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          color: Yup.string(),
          km: Yup.string(),
          shift: Yup.string(),
          direction: Yup.string(),
          fuel: Yup.string(),
        });
        console.log(data);

        await schema.validate(data, {
          abortEarly: false,
        });



        history.push({
          pathname: '/register-ads-description',
          state: { firstStep: state, secondStep: data }
        })

      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }


      }
    },
    [],
  );
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/adverts">
            <FiArrowLeft size={25} />
          </Link>
          <img src={logoImg} alt="OneCar" />

          <First>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </First>

          <Profile onClick={() => setDropdownActive(true)}>
            <img src={avatar} alt="User" />
          </Profile>
        </HeaderContent>
      </Header>
      <Dropdown
        hideMenu={() => setDropdownActive(false)}
        active={dropdownActive}
        width='300px'
        contentDisplay='block'
        fadeInDisplay='block'
        maxWidth='400px'
      >
        <ul>
          <li>
            <button type='button' onClick={() => history.push('/ads-management')}>Meus Anúncios</button>
          </li>
          <hr />
          <li>
            <button type='button' onClick={() => signOut()}>Sair</button>
          </li>
        </ul>


      </Dropdown>
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

          {/* <div>
            <img src={motor} alt="Motor do veículo" />
            <Input name="motor" placeholder="Motor" />
          </div> */}

          <div>
            <img src={shift} alt="Câmbio do veículo" />
            <Input name="shift" placeholder="Câmbio" />
          </div>

          <div>
            <img src={direction} alt="Tipo de Direção do veículo" />
            <Input name="direction" placeholder="Direção" />
          </div>

          {/* <div>
            <img src={door} alt="Quantidade de portas do veículo" />
            <Input name="door" placeholder="Portas" />
          </div> */}

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