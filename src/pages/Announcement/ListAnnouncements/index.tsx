/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import TopBar from '../../../components/TopBar';
import Search from './components/Search';
import WhatWeOffer from './components/WhatWeOffer';
import Adverts from './components/Adverts';

import { Container, Content } from './styles';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

const ListAnnouncements: React.FC = () => {
  const [ads, setAds] = useState();
  const { token } = useAuth();

  useEffect(() => {
    loadCars();
  }, []);

  async function loadCars() {
    const response = await api.get('/ads', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAds(response?.data?.results);
  }

  return (
    <Container>
      <TopBar />
      <Content>
        <Search setAds={setAds} />
        <WhatWeOffer />
        <Adverts announcements={ads} />
      </Content>
    </Container>
  );
};

export default ListAnnouncements;
