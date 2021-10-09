import React, { useCallback, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';

import Button from '../../../components/Button';

import { Container, Content } from './styles';
import Dropzone from '../../../components/Dropzone';
import { useAuth } from '../../../hooks/auth';

// import fileAds from '../../../assets/csv/file-ads.csv';


type CSVData = string | null;

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


  const [fetchedCSVData, setFetchedCSVData] = useState<string>('');

  if (!fetchedCSVData) {
    fetch(`${process.env.PUBLIC_URL}/csv/file-ads.csv`)
      .then(res => setFetchedCSVData(res.url))

  }

  return (
    <Content>
      <h2>Deseja otimizar seu tempo? Importe um csv!</h2>

      <Dropzone onFileUploaded={setSelectedFile} />

      <Button type="submit" onClick={handleUploadFile}>
        Confirmar
      </Button>
      <a href={fetchedCSVData}>Faça download do modelo CSV</a>
    </Content>
  );
};

export default ImportAnnouncements;
