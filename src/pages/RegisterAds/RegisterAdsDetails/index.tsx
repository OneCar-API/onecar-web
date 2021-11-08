/* eslint-disable react-hooks/exhaustive-deps */
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import { Container, Content } from './style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import color from '../../../assets/images/color.svg';
import km from '../../../assets/images/km.svg';
import shift from '../../../assets/images/shift.svg';
import direction from '../../../assets/images/direction.svg';
import fuel from '../../../assets/images/fuel.svg';

import getValidationErrors from '../../../utils/getValidationErrors';
import TopBar from '../../../components/TopBar';

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
  year_manufacture: string;
  year_model: string;
}

const RegisterAdsDetails: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { state } = useLocation<RegisterAdsFormData>();

  const history = useHistory();

  const handleSubmit = useCallback(async (data: RegisterAdsDetailsFormData) => {
    try {
      console.log(state);
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        color: Yup.string(),
        km: Yup.string(),
        shift: Yup.string(),
        direction: Yup.string().required('Direção obrigatória'),
        fuel: Yup.string(),
      });
      console.log(data);

      await schema.validate(data, {
        abortEarly: false,
      });

      history.push({
        pathname: '/register-ads-description',
        state: { firstStep: state, secondStep: data },
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);
  return (
    <Container>
      <TopBar />
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
            <img src={shift} alt="Câmbio do veículo" />
            <Input name="shift" placeholder="Câmbio" />
          </div>

          <div>
            <img src={direction} alt="Tipo de Direção do veículo" />
            <Input name="direction" placeholder="Direção" />
          </div>

          <div>
            <img src={fuel} alt="Tipo de combustível do veículo" />
            <Input name="fuel" placeholder="Combustível" />
          </div>

          <Button type="submit">Próximo</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default RegisterAdsDetails;
