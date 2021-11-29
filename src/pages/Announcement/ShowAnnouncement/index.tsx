/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Content } from './styles';

import TopBar from '../../../components/TopBar';
import CarPictures from './components/CarPictures';
import CarDetails from './components/CarDetails';
import EditAds from './components/EditAds';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

const ShowAnnouncement: React.FC = () => {
  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);
  const bool = false;

  const [announcement, setAnnouncement] = useState<any>();
  const [edit, setEdit] = useState(bool);

  const { token, user } = useAuth();

  useEffect(() => {
    showAnnouncements();
  }, []);

  async function showAnnouncements() {
    const response = await api.get(`/ads/${idString}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAnnouncement(response?.data);
  }

  return (
    <Container>
      <TopBar />
      <Content>
        {edit ? (
          <EditAds
            picture={announcement?.car?.carImages[0]?.image_url}
            model={announcement?.car?.model}
            year={announcement?.car?.year_manufacture}
            brand={announcement?.car?.brand}
            description={announcement?.description}
            setEdit={setEdit}
          />
        ) : (
          <>
            <CarPictures user={user} pictures={announcement?.car?.carImages} />
            <CarDetails
              user={user}
              announcementUser={announcement?.user}
              brandTitle={announcement?.car?.brand}
              model={announcement?.car?.model}
              price={announcement?.price}
              year={announcement?.car?.year_manufacture}
              brand={announcement?.car?.brand}
              km={announcement?.car?.km}
              description={announcement?.description}
              ownerName={announcement?.user?.name}
              ownerPhone={announcement?.user?.phone}
              setEdit={setEdit}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default ShowAnnouncement;
