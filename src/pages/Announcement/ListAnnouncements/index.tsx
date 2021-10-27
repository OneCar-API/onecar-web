import React, { useEffect, useState } from 'react';

import { FiHeart } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import TopBar from '../../../components/TopBar';
import Modal from '../../../components/Modal';
import Menu from '../../../components/Menu';
import ImportAnnouncement from '../ImportAnnouncements';

import {
  Container,
  Announcements,
  Visualization,
  Main,
  GridIcon,
  ListIcon,
} from './styles';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

interface IAds {
  id: string;
  price: number;
  created_at: string;
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

const ListAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<IAds[]>([]);

  const [modalActive, setModalActive] = useState(false);
  const [selected, setSelected] = useState('list');

  const { token, user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    loadCars();
  }, []);

  async function loadCars() {
    const response = await api.get('/ads', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const ads = response.data.results;
    console.log(ads);
    setAnnouncements([...ads]);
    console.log('announcements', announcements);
  }

  function viewAnnouncement(id: string) {
    if (user) {
      history.push(`/advert-p/${id}`);
    } else {
      history.push(`/advert/${id}`);
    }
  }

  const [visualization, setVisualization] = useState('block');

  return (
    <Container>
      <TopBar />
      <body>
        <Announcements>
          <Visualization>
            <GridIcon
              selected={selected}
              size={30}
              onClick={() => {
                setVisualization('flex');
                setSelected('grid');
              }}
            />
            <ListIcon
              selected={selected}
              size={30}
              onClick={() => {
                setVisualization('block');
                setSelected('list');
              }}
            />
          </Visualization>
          <Menu display={visualization}>
            {announcements.map(announcement => (
              <Main
                display={visualization}
                onClick={() => viewAnnouncement(announcement.id)}
              >
                <img src={announcement?.car?.carImages[0]?.image} alt="Carro" />

                <div>
                  <strong>
                    {`${announcement.car.brand} ${announcement.car.model}`}
                  </strong>
                  <p>{announcement.car.year_manufacture}</p>

                  <h1>
                    R$
                    {announcement.price}
                    ,00
                  </h1>
                </div>

                <div id="info">
                  <div>
                    <p>{announcement.car.km}</p>
                    <FiHeart size={20} />
                  </div>
                  <hr />
                </div>
              </Main>
            ))}
          </Menu>
        </Announcements>
        <Modal
          hideModal={() => setModalActive(false)}
          active={modalActive}
          width="800px"
          title="Importar Anúncio"
          contentDisplay="block"
          fadeInDisplay="block"
          maxWidth="800px"
        >
          <ImportAnnouncement />
        </Modal>
      </body>
    </Container>
  );
};

export default ListAnnouncements;
