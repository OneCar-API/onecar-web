import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';

import TopBar from '../../../components/TopBar';

import DisplayAd from './components/DisplayAd';

import EditAdField from './components/EditAdField';

const EditAds: React.FC = () => {
  return (
    <Container>
      <TopBar />

      <Content>
        <DisplayAd />
        <EditAdField />
      </Content>
    </Container>
  );
};

export default EditAds;
