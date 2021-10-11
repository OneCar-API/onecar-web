import { Form } from "@unform/web";
import React, { useCallback, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import {
  Container,
  Content,
  Header,
  HeaderContent,
  First,
  Profile,
  IconVoltar,
  DropzoneArea
} from './style'

import DropzoneImg from "../../../components/DropzoneImg"
import Input from '../../../components/Input'
import Dropdown from '../../../components/Dropdown'
import Button from '../../../components/Button'
import TextArea from '../../../components/TextArea'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';
import getValidationErrors from "../../../utils/getValidationErrors";
import api from "../../../services/api";
import { useAuth } from "../../../hooks/auth";


interface RegisterAdsDescriptionFormData {
  title: string;
  vehicle_price: string;
  description: string;
}

interface RegisterAdsStateFormData {
  firstStep: {
    brand: string;
    model: string;
    year_manufacture: string;
    year_model: string;
  };
  secondStep: {
    color: string;
    km: string;
    shift: string;
    direction: string;
    fuel: string;
  };
}


const RegisterAdsDescription: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { state } = useLocation<RegisterAdsStateFormData>()

  const history = useHistory();

  const { user, signOut, token } = useAuth();

  const [selectedFile, setSelectedFile] = useState<any>();

  const [dropdownActive, setDropdownActive] = useState(false);

  const [priceValue, setPriceValue] = useState<string>();

  const handleSubmit = useCallback(
    async (data: RegisterAdsDescriptionFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          vehicle_price: Yup.string().required('Preço obrigatório'),
          description: Yup.string(),
        });
        console.log('a')
        await schema.validate(data, {
          abortEarly: false,
        });

        const obj = {
          vehicle_price: data.vehicle_price,
          year_manufacture: state.firstStep.year_manufacture,
          year_model: state.firstStep.year_model,
          brand: state.firstStep.brand,
          manufacturer: state.firstStep.brand,
          model: state.firstStep.model,
        }

        const response = await api.post('/ads', obj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


        console.log(response)
        history.push('/register-ads-msg')

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
        <h1>Pra finalizar, vamos aos detalhes do seu anúncio!</h1>


        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título do anúncio" />

          <Input value={priceValue} onChange={(e) => setPriceValue(numberMask(e.target.value))} name="vehicle_price" placeholder="Preço do veículo" />

          <TextArea name="description" title='' placeholder="Descrição..." cols={60} rows={4} />

          <h2>Inserir imagens: (Limite de 6 imagens)</h2>
          <DropzoneArea>

            <DropzoneImg onFileUploaded={setSelectedFile} />

            <DropzoneImg onFileUploaded={setSelectedFile} />

          </DropzoneArea>
          <Button type="submit">Finalizar</Button>
        </Form>
      </Content>
    </Container>


  )
}

export default RegisterAdsDescription;