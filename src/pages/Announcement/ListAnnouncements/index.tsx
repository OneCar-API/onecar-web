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
import gearbox_type from '../../../assets/images/shift.svg';
import motor from '../../../assets/images/motor.svg';
import direction from '../../../assets/images/direction.svg';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

interface IAds {
  id: string;
  ad_code: number;
  title: string;
  description: string;
  price: string;
  views: number;
  interests: number;
  car_id: {
    id: string;
    manufacturer: string;
    brand: string;
    model: string;
    year_manufacturer: string;
    year_model: string;
    fuel: string;
    gearbox_type: string;
    km: number;
    color: number;
  };
}

const ListAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<IAds[]>([]);

  const { token } = useAuth();

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

          <Link to="/import-ads">
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
                to="/advert"
                onClick={() => viewAnnouncement(announcement.id)}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU"
                  alt="Carro"
                />

                <div>
                  <strong>
                    {announcement.car_id.brand}
                    {announcement.car_id.model}
                  </strong>
                  <p>
                    {announcement.car_id.year_manufacturer}
                    {announcement.car_id.year_model}
                  </p>

                  <h1>
                    R$
                    {announcement.price}
                    ,00
                  </h1>
                </div>

                <div id="info">
                  <div>
                    <p>
                      {announcement.car_id.km}
                      80000km
                    </p>
                    <FiHeart size={20} />
                  </div>

                  <div>
                    <img src={gearbox_type} alt="Câmbio" />
                    <p>{announcement.car_id.gearbox_type}</p>
                  </div>

                  <div>
                    <img src={motor} alt="Potência do motor" />
                    <p>2.0</p>
                  </div>

                  <div>
                    <img src={direction} alt="Direção" />
                    <p>Hidráulica</p>
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
