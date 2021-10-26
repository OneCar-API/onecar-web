import React, { useEffect, useState } from 'react';

import { Container, Content, Menu } from './style';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ImportAnnouncements from '../Announcement/ImportAnnouncements';
import TopBar from '../../components/TopBar';

import viewImg from '../../assets/images/views.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface IAds {
  id: string;
  price: string;
  created_at: string;
  views: string;
  car: {
    id: string;
    manufacturer: string;
    brand: string;
    model: string;
    year_manufacture: string;
    year_model: string;
    fuel: string;
    gearbox_type: string;
    km: string;
    color: string;
    carImages: [
      {
        id: string;
        image: string;
        car_id: string;
        image_url: string;
      },
    ];
  };
}

const AdsManagement: React.FC = () => {
  const [announcements, setAnnouncements] = useState<IAds[]>([]);

  const [modalActive, setModalActive] = useState(false);

  const { token } = useAuth();

  useEffect(() => {
    loadCars();
  }, []);

  async function loadCars() {
    console.log(token);
    const response = await api.get('/ads/myAds/show', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    setAnnouncements(response.data);
  }

  return (
    <Container>
      <TopBar />
      <Menu>
        <h1>Seus anúncios</h1>
        <Button type="button" onClick={() => setModalActive(true)}>
          Importar
        </Button>
      </Menu>

      <Content>
        {announcements ? (
          announcements.map(announcement => (
            <div id="content">
              <img src={announcement?.car.carImages[0].image} alt="Carro" />
              <div id="description">
                <h2>{`${announcement.car.brand} ${announcement.car.model}`}</h2>

                <div className="views">
                  <img src={viewImg} alt="view" className="icons" />
                  <p>
                    {`${
                      announcement?.views ? announcement?.views : 0
                    } visualizações`}
                  </p>
                </div>

                {/* <div className="likes">
                                <img src={likeImg} alt="like" className="icons" />
                                <p>12 curtidas</p>
                            </div> */}

                {/* <p className="date">Publicado em 29 de Setembro</p> */}
              </div>
            </div>
          ))
        ) : (
          <h3>Você não possui nenhum anúncio...</h3>
        )}
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
