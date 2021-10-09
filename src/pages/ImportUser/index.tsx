import React, { useCallback, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';

import { Container, Content, Header } from './styles';
import Dropzone from '../../components/Dropzone';

const ImportUsers: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<any>();

  const { addToast } = useToast();
  const history = useHistory();

  const handleUploadFile = useCallback(async () => {
    try {
      const formData = new FormData();
      formData.append('file-users', selectedFile);
      await api.post('/users/import', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description:
          'Foi enviado um e-mail contendo uma senha para cada um dos usuários.',
      });

      history.push('/');
    } catch (error) {
      if (error) {
        console.log(error);
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      });
    }
  }, [addToast, selectedFile, history]);

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

        <Button type="submit" onClick={handleUploadFile}>
          Cadastrar
        </Button>
      </Content>
    </Container>
  );
};

export default ImportUsers;
