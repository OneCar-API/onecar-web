import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import ButtonBack from '../../components/ButtonBack';

import { Container, Content, Header } from './style';

import api from '../../services/api';

interface NewPasswordFormData {
  password: string;
  password_confirmation: string;
}

const NewPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const location = useLocation();

  const handleSubmit = useCallback(
    async (data: NewPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Senha não corresponde à nova senha',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        addToast({
          type: 'success',
          title: 'Senha recuperada com sucesso',
          description:
            'Sua senha foi recuperada, você já pode realizar seu login!',
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
        });
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Header>
        <Link to="/signin">
          <ButtonBack type="submit">Voltar</ButtonBack>
        </Link>
      </Header>
      <Content>
        <Logo />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="password"
            type="password"
            placeholder="Insira a nova senha"
          />

          <Input
            name="password_confirmation"
            type="password"
            placeholder="Confirme a nova senha"
          />

          <Button type="submit">Alterar senha</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewPassword;
