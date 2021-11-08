import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Content } from './style';

import Button from '../../../components/Button';

import final from '../../../assets/images/final.svg';

import TopBar from '../../../components/TopBar';

const RegisterAdsMsg: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <TopBar />
      <Content>
        <h1>Parabéns, seu anúncio foi inserido!</h1>

        <img src={final} alt="Concluído com sucesso" />

        <h2>
          Você pode conferir seu anúncio no painel de administração de anúncios
        </h2>

        <Button type="button" onClick={() => history.push('/ads-management')}>
          Meus anúncios
        </Button>
      </Content>
    </Container>
  );
};

export default RegisterAdsMsg;
