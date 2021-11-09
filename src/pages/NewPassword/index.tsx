import React, { useRef, useCallback, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import TopBar from '../../components/TopBar';

import { Container, Content, Header } from './style';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface NewPasswordFormData {
  password: string;
  password_confirmation: string;
}

const NewPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const location = useLocation();

  const { user, token, signOut, allowUser } = useAuth();

  let user_id: string;

  useEffect(() => {
    for (const [key, value] of Object.entries(user)) {
      if (value === true && key === 'is_active') {
        history.push('/');
      }
      if (key === 'id') {
        user_id = value;
      }
    }
  }, []);

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

        const obj = {
          password: data.password,
          password_confirmation: data.password_confirmation,
        };

        await schema.validate(data, {
          abortEarly: false,
        });

        if (!token) {
          throw new Error();
        } else {
          await api.post(`/password/reset${location.search}`, obj, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          await allowUser({ token: location.search.replace('?token=', '') });
        }

        addToast({
          type: 'success',
          title: 'Senha recuperada com sucesso',
          description:
            'Sua senha foi recuperada, você já pode realizar seu login!',
        });

        signOut;
        history.push('/signin');
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
      <TopBar />
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
