import React, { useEffect, useState } from 'react';

import { FiSearch, FiArrowLeft } from 'react-icons/fi';

import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Form,
  Profile,
  Content,
  Main,
  Info,
} from './styles';

import avatar from '../../../assets/images/botaoUser.svg';
import calendar from '../../../assets/images/year.svg';
import km from '../../../assets/images/km.svg';
import color from '../../../assets/images/color.svg';
import exchange from '../../../assets/images/shift.svg';
import motor from '../../../assets/images/motor.svg';
import direction from '../../../assets/images/direction.svg';
import fuel from '../../../assets/images/fuel.svg';
import door from '../../../assets/images/door.svg';
import api from '../../../services/api';

interface IAds {
  id: string;
  description: string;
  price: string;
  views: number;
  interests: number;
  cars: {
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

const ShowAnnouncement: React.FC = () => {
  const [announcement, setAnnouncement] = useState<IAds>();

  const id = useParams();

  useEffect(() => {
    showAnnouncements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function showAnnouncements() {
    const response = await api.get(`ads/${id}`);

    console.log(response);

    setAnnouncement(response.data);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/announcements">
            <FiArrowLeft size={25} />
          </Link>

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

      <Content>
        <Main>
          <img
            src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx"
            alt="Jeep Renegade"
          />

          <div>
            <button type="button">
              <img
                src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx"
                alt="Jeep Renegade"
              />
            </button>

            <button type="button">
              <img
                src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx"
                alt="Jeep Renegade"
              />
            </button>

            <button type="button">
              <img
                src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx"
                alt="Jeep Renegade"
              />
            </button>

            <button type="button">
              <img
                src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx"
                alt="Jeep Renegade"
              />
            </button>
          </div>

          <h1>Descrição</h1>
          <input placeholder="Carro bem conservado, ..." />
        </Main>

        <Info>
          <strong>Jeep Renegade</strong>
          <h1>{announcement?.price}</h1>

          <div>
            <img src={calendar} alt="Calendário" />
            <div>
              <p>Ano:</p>
              <strong>{announcement?.cars.year_manufacturer}</strong>
            </div>
          </div>

          <div>
            <img src={km} alt="Quilometragem" />
            <div>
              <p>Quilometragem:</p>
              <strong>{announcement?.cars.km}</strong>
            </div>
          </div>

        <div>
          <img src={color} alt="Cor" />

          <div>
            <img src={exchange} alt="Cor" />
            <div>
              <p>Cor:</p>
              <strong>Vermelho</strong>
            </div>
          </div>

          <div>
            <img src={exchange} alt="Câmbio" />
            <div>
              <p>Câmbio:</p>
              <strong>{announcement?.cars.gearbox_type}</strong>
            </div>
          </div>

          <div>
            <img src={motor} alt="Motor" />
            <div>
              <p>Motor:</p>
              <strong>{announcement?.cars.model}</strong>
            </div>
          </div>

          <div>
            <img src={direction} alt="Direção" />
            <div>
              <p>Direção:</p>
              <strong>
                {announcement?.cars.vehicle_items.hydraulic_steering
                  ? 'Hidráulica'
                  : 'Mecânica'}
              </strong>
            </div>
          </div>

          <div>
            <img src={fuel} alt="Combustível" />
            <div>
              <p>Combustível:</p>
              <strong>{announcement?.cars.fuel}</strong>
            </div>
          </div>

          <div>
            <img src={door} alt="Portas" />
            <div>
              <p>Portas:</p>
              <strong>4</strong>
            </div>
          </div>
        </Info>
      </Content>
    </Container>
  );
};

export default ShowAnnouncement;
