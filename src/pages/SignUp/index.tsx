import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';

import { Container, Content, Header } from './style';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
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
      <Header>
        <ButtonBack type="submit">Voltar</ButtonBack>
      </Header>
      <Content>
        <h1>É novo por aqui? Faça seu cadastro.</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome:" />

          <Input name="email" placeholder="E-mail: " />

          <Input name="password" type="password" placeholder="Senha: " />
          <a href="csv">Você também pode importar um arquivo CSV</a>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
