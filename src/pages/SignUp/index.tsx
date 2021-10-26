import React, { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Modal from '../../components/Modal';

import { Container, Content, Header } from './style';
import ImportUsers from '../ImportUser';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [modalActive, setModalActive] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          nickname: Yup.string().required('Apelido obrigatório'),
          document: Yup.string().required('Documento obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        console.log(data);
        await api.post('/user', data);
        history.push('/signin');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer login no OneCar!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          console.log(error);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header>
        <Link to="/signin">
          <ButtonBack type="submit">Voltar</ButtonBack>
        </Link>
      </Header>
      <Content>
        <h1>É novo por aqui? Faça seu cadastro!</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome:" />

          <Input name="nickname" placeholder="Apelido:" />

          <Input name="document" placeholder="CPF:" />

          <Input name="email" placeholder="E-mail: " />

          <Input name="password" type="password" placeholder="Senha: " />

          <Link to="/signup" onClick={() => setModalActive(true)}>
            <h2>Você também pode fazer o upload de um arquivo!</h2>
          </Link>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
      <Modal
        hideModal={() => setModalActive(false)}
        active={modalActive}
        width="800px"
        title="Importar Usuário"
        contentDisplay="block"
        fadeInDisplay="block"
        maxWidth="800px"
      >
        <ImportUsers />
      </Modal>
    </Container>
  );
};

export default SignUp;
