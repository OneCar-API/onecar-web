/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Menu } from './style';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ImportAnnouncements from '../Announcement/ImportAnnouncements';
import Ad from './components/Ad';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import TopBar from '../../components/TopBar';

const AdsManagement = () => {
  const [announcements, setAnnouncements] = useState([]);

  const [modalActive, setModalActive] = useState(false);

  const { user, token } = useAuth();

  useEffect(() => {
    loadCars();
  }, []);

  async function loadCars() {
    const response = await api.get('/ads', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAnnouncements(response?.data?.results);
    console.log(announcements, 'announcements');
  }

  return (
    <Container>
      <TopBar />
      <Menu>
        <Button type="button" onClick={() => setModalActive(true)}>
          Importar
        </Button>
      </Menu>

      <Content>
        <div className="blue-text">
          <div className="line" />
          <p>Últimos anúncios</p>
          <div className="line" />
        </div>
        <h1>Seus anúncios</h1>
        <div className="ads">
          {announcements?.length &&
            announcements.map(announcement => (
              <>
                {announcement?.user?.id === user?.id && (
                  <Link to={`/advert/${announcement?.id}`}>
                    <Ad
                      image={announcement?.car?.carImages[0]?.image_url}
                      year={announcement?.car?.year_manufacture}
                      brand={announcement?.car?.brand}
                      model={announcement?.car?.model}
                      price={announcement?.price}
                      created_at={announcement?.created_at}
                    />
                  </Link>
                )}
              </>
            ))}
        </div>
      </Content>
      <Modal
        hideModal={() => setModalActive(false)}
        active={modalActive}
        width="800px"
        title="Importar Anúncio"
        contentDisplay="block"
        fadeInDisplay="block"
        maxWidth="800px"
      >
        <ImportAnnouncements />
      </Modal>
    </Container>
  );
};

export default AdsManagement;
