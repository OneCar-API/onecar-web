import React, { useCallback, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';

import Button from '../../../components/Button';
import ButtonBack from '../../../components/ButtonBack';

import { Container, Content, Header } from './styles';
import Dropzone from '../../../components/Dropzone';
import { useAuth } from '../../../hooks/auth';

const ImportAnnouncements: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<any>();

  const { token } = useAuth();

  const { addToast } = useToast();
  const history = useHistory();

  const handleUploadFile = useCallback(async () => {
    try {
      const formData = new FormData();
      formData.append('file-ads', selectedFile);
      await api.post('/ads/import', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      addToast({
        type: 'success',
        title: 'Cadastro de anúncios realizado!',
        description: 'Seus anúncios foram importados com sucesso!',
      });

      history.push('/');
    } catch (error) {
      if (error) {
        console.log(error);
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro de anúncios',
        description:
          'Ocorreu um erro ao fazer a importação dos anúncios, tente novamente.',
      });
    }
  }, [addToast, selectedFile, history, token]);

  return (
    <Container>
      <Header>
        <Link to="/adverts">
          <ButtonBack type="submit">Voltar</ButtonBack>
        </Link>
      </Header>
      <Content>
        <h1>Deseja otimizar seu tempo? Importe um csv!</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <Button type="submit" onClick={handleUploadFile}>
          Confirmar
        </Button>
      </Content>
    </Container>
  );
};

export default ImportAnnouncements;
