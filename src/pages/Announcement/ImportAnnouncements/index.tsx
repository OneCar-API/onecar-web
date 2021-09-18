import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';

import getValidationErrors from '../../../utils/getValidationErrors';

import Button from '../../../components/Button';
import ButtonBack from '../../../components/ButtonBack';

import { Container, Content, Header } from './styles';
import Dropzone from '../../../components/Dropzone';

interface ImportAnnouncementsFormData {
  name: string;
  email: string;
  password: string;
}

const ImportAnnouncements: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  useCallback(
    async (data: ImportAnnouncementsFormData) => {
      try {
        formRef.current?.setErrors({});

        await api.post('/ads/import', data);

        history.push('/announcements');

        addToast({
          type: 'success',
          title: 'Anúncios cadastrados!',
          description: 'Seus anúncios foram cadastrados com sucesso!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no upload do arquivo',
          description:
            'Ocorreu um erro ao fazer upload do arquivo, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header>
        <Link to="/announcements">
          <ButtonBack type="submit">Voltar</ButtonBack>
        </Link>
      </Header>
      <Content>
        <h1>Deseja otimizar seu tempo? Importe um csv!</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <Button type="submit">Confirmar</Button>
      </Content>
    </Container>
  );
};

export default ImportAnnouncements;
