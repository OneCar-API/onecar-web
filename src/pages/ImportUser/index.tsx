import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';

import { Container, Content, Header } from './styles';
import Dropzone from '../../components/Dropzone';

interface ImportUsersFormData {
  name: string;
  email: string;
  password: string;
}

const ImportUsers: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  useCallback(
    async (data: ImportUsersFormData) => {
      try {
        formRef.current?.setErrors({});

        await api.post('/users/import', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastros realizados!',
          description:
            'Foi enviado um e-mail contendo uma senha para cada usuário!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

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
        <Link to="/">
          <ButtonBack type="submit">Voltar</ButtonBack>
        </Link>
      </Header>
      <Content>
        <h1>Deseja otimizar seu tempo? Importe um csv!</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <Button type="submit">Cadastrar</Button>
      </Content>
    </Container>
  );
};

export default ImportUsers;
