import React, { useEffect, useState } from 'react';

import { FiSearch, FiHeart, FiGrid, FiList } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Form,
  Profile,
  Announcements,
  Visualization,
  Main,
} from './styles';

import logoImg from '../../../assets/images/logo.svg';
import avatar from '../../../assets/images/botaoUser.svg';
import exchange from '../../../assets/images/shift.svg';
import motor from '../../../assets/images/motor.svg';
import direction from '../../../assets/images/direction.svg';
import api from '../../../services/api';

interface IAds {
  id: string;
  description: string;
  price: string;
  views: number;
  interests: number;
  car: {
    manufacturer: string;
    brand: string;
    model: string;
    year_manufacturer: string;
    fuel: string;
    gearbox_type: string;
    km: number;
    vehicle_items: {
      airbag: boolean;
      alarm: boolean;
      air_conditioning: boolean;
      eletric_lock: boolean;
      eletric_window: boolean;
      stereo: boolean;
      reverse_sense: boolean;
      reverse_camera: boolean;
      armored: boolean;
      hydraulic_steering: boolean;
    };
  };
}

const ListAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<IAds[]>([]);

  const history = useHistory();

  useEffect(() => {
    loadCars();
  });

  async function loadCars() {
    const response = await api.get('/adverts');

    console.log(response);

    setAnnouncements(response.data);
  }

  function viewAnnouncement(id: string) {
    history.push(`/advert/${id}`);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="OneCar" />

          <Form>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </Form>

          <Link to="/import-announcements">
            <button type="button">Anunciar</button>
          </Link>

          <Profile>
            <img src={avatar} alt="User" />
          </Profile>
        </HeaderContent>
      </Header>

      <body>
        <Announcements>
          <Visualization>
            <FiGrid size={30} />
            <FiList size={30} />
          </Visualization>

          {announcements.map(announcement => (
            <Main>
              <Link
                to="/announcement"
                onClick={() => viewAnnouncement(announcement.id)}
              >
                <img
                  src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx"
                  alt="Jeep Renegade"
                />

                <div>
                  <strong>Jeep Renegade</strong>
                  <p>{announcement.car.year_manufacturer}</p>

                  <h1>{announcement.price}</h1>
                </div>

                <div id="info">
                  <div>
                    <p>{announcement.car.km}</p>
                    <FiHeart size={20} />
                  </div>

                  <div>
                    <img src={exchange} alt="Câmbio" />
                    <p>{announcement.car.gearbox_type}</p>
                  </div>

                  <div>
                    <img src={motor} alt="Potência do motor" />
                    <p>{announcement.car.model}</p>
                  </div>

                  <div>
                    <img src={direction} alt="Direção" />
                    <p>
                      {announcement.car.vehicle_items.hydraulic_steering
                        ? 'Hidráulica'
                        : 'Mecânica'}
                    </p>
                  </div>

                  <hr />
                  <h4>São José dos Campos - SP</h4>
                </div>
              </Link>
            </Main>
          ))}
        </Announcements>
      </body>
    </Container>
  );
};

export default ListAnnouncements;
