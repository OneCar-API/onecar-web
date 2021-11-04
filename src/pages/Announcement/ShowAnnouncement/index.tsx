import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';

import TopBar from '../../../components/TopBar';
import CarPictures from './components/CarPictures';
import CarDetails from './components/CarDetails';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

interface RouterParams {
  id: string;
}

const ShowAnnouncement: React.FC = () => {
  const [announcement, setAnnouncement] = useState(Object);

  const { token } = useAuth();

  const { id } = useParams<RouterParams>();

  useEffect(() => {
    showAnnouncements();
  }, [id]);

  async function showAnnouncements() {
    const response = await api.get(`/ads/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('response', response);
    setAnnouncement(response?.data);
  }

  return (
    <Container>
      <TopBar />
      <Content>
        <CarPictures pictures={announcement?.car?.carImages} />
        <CarDetails
          brandTitle={announcement?.car?.brand}
          model={announcement?.car?.model}
          price={announcement?.price}
          year={announcement?.car?.year_manufacture}
          brand={announcement?.car?.brand}
          fuel={announcement?.car?.fuel}
          description={announcement?.description}
          ownerName={announcement?.user?.name}
          ownerPhone={announcement?.user?.phone}
        />
      </Content>
    </Container>
  );
};

export default ShowAnnouncement;
