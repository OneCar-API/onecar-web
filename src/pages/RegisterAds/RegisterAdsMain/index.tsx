
import React, { useCallback, useRef, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';

// import * as Yup from 'yup;'

import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Header, HeaderContent, First, Profile, FormSearch } from './style'


import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Dropdown from '../../../components/Dropdown'

import marca from '../../../assets/images/marca.svg'
import modelo from '../../../assets/images/car.svg'
import year from '../../../assets/images/year.svg'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';
import getValidationErrors from "../../../utils/getValidationErrors";
import { useAuth } from "../../../hooks/auth";

interface RegisterAdsFormData {
  brand: string;
  model: string;
  year_manufacture: string;
  year_model: string;
}

const RegisterAds: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const [dropdownActive, setDropdownActive] = useState(false);

  const { signOut } = useAuth();

  const [yearManufactureValue, setYearManufactureValue] = useState<string>();
  const [yearModelValue, setYearModelValue] = useState<string>();

  const handleSubmit = useCallback(
    async (data: RegisterAdsFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          brand: Yup.string()
            .required('Marca obrigatória'),
          model: Yup.string()
            .required('Modelo obrigatório'),
          year_manufacture: Yup.string()
            .required('Ano de Fabricação obrigatório'),
          year_model: Yup.string()
            .required('Ano do Modelo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push({
          pathname: '/register-ads-details',
          state: data
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

  const numberMask = (value: string) => {
    return value.replace(/\D/g, "")
  };
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/adverts">
            <FiArrowLeft size={25} />
          </Link>
          <img src={logoImg} alt="OneCar" />
          <FormSearch>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </FormSearch>
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
        <h1>Conta pra gente sobre o seu carro!</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <div>
            <img id="marca" src={marca} alt="Marca do veículo" />
            <Input name="brand" placeholder="Marca" />
          </div>

          <div>
            <img className="modelo" src={modelo} alt="Modelo do veículo" />
            <Input name="model" placeholder="Modelo" />
          </div>

          <div>
            <img id="year" src={year} alt="Ano de fabricação" />
            <Input value={yearManufactureValue} onChange={(e) => setYearManufactureValue(numberMask(e.target.value))} name="year_manufacture" placeholder="Ano de fabricação" type='' />
          </div>

          <div>
            <img id="year" src={year} alt="Ano do modelo" />
            <Input value={yearModelValue} onChange={(e) => setYearModelValue(numberMask(e.target.value))} name="year_model" placeholder="Ano do modelo" type='' />
          </div>

          <Button type="submit">Próximo</Button>
        </Form>
      </Content>
    </Container>


  )
}

export default RegisterAds;