import React, { useEffect, useState } from 'react';

import { FiSearch, FiArrowLeft } from 'react-icons/fi';

import { Link, useHistory, useParams } from 'react-router-dom';

import Dropdown from '../../../components/Dropdown'

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
import gearbox_type from '../../../assets/images/shift.svg';
import motor from '../../../assets/images/motor.svg';
import direction from '../../../assets/images/direction.svg';
import fuel from '../../../assets/images/fuel.svg';
import door from '../../../assets/images/door.svg';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

// interface IAds {
//   id: string;
//   ad_code: number;
//   title: string;
//   description: string;
//   price: string;
//   views: number;
//   interests: number;
//   car_id: {
//     id: string;
//     manufacturer: string;
//     brand: string;
//     model: string;
//     year_manufacturer: string;
//     year_model: string;
//     fuel: string;
//     gearbox_type: string;
//     km: number;
//     color: number;
//     vehicle_item_id: {
//       airbag: boolean;
//       alarm: boolean;
//       air_conditioning: boolean;
//       eletric_lock: boolean;
//       eletric_window: boolean;
//       stereo: boolean;
//       reverse_sensor: boolean;
//       reverse_camera: boolean;
//       armoured: boolean;
//       hydraulic_steering: boolean;
//     }
//   };
// }

interface IAds {
  description: string;
  id: string;
  price: string;
  created_at: string;
  car: {
    id: string;
    manufacturer: string;
    brand: string;
    model: string;
    year_manufacture:string;
    year_model: string;
    fuel: string;
    gearbox_type: string;
    km: string;
    color: string;
    carImages: [
      {
        id: string,
        image: string,
        car_id: string,
        image_url: string,
      }
    ];
  }
  user: {
    name: string;
    phone: string;
  }
}


interface RouterParams {
  id: string
}

const ShowAnnouncement: React.FC = () => {
  const [announcement, setAnnouncement] = useState<IAds>();

  const [modalActive, setModalActive] = useState(false)

  const [dropdownActive, setDropdownActive] = useState(false);

  const { token, user, signOut } = useAuth();

  const history = useHistory();

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

    console.log(response);

    setAnnouncement(response.data);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/">
            <FiArrowLeft size={25} />
          </Link>

          <Form>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </Form>
          {
            user ?
              <>
                <button type="button" onClick={() => history.push('/register-ads')}>Anunciar</button>
                <Profile onClick={() => setDropdownActive(true)}>
                  <img src={avatar} alt="User" />
                </Profile>
              </>
              :
              <>
                <button type="button" onClick={() => history.push('/signin')}>Entrar</button>
                <Profile>
                  <img src={avatar} alt="User" />
                </Profile>
              </>
          }


        </HeaderContent>
      </Header>
      <Dropdown
        hideMenu={() => setDropdownActive(false)}
        active={dropdownActive}
        width='300px'
        contentDisplay='block'
        fadeInDisplay='block'
        maxWidth='400px'
      >
        <ul>
          <li>
            <button type='button' onClick={() => history.push('/ads-management')}>Meus Anúncios</button>
          </li>
          <hr />
          <li>
            <button type='button' onClick={() => signOut()}>Sair</button>
          </li>
        </ul>


      </Dropdown>
      <Content>
        <Main>
          <img
            src={announcement?.car.carImages[0].image}
            alt="Carro"
          />

          <div>
            <button type="button">
              <img
                src={announcement?.car.carImages[0].image}
                alt="Carro"
              />
            </button>

            <button type="button">
              <img
                src={announcement?.car.carImages[0].image}
                alt="Carro"
              />
            </button>

            <button type="button">
              <img
                src={announcement?.car.carImages[0].image}
                alt="Carro"
              />
            </button>

            <button type="button">
              <img
                src={announcement?.car.carImages[0].image}
                alt="Carro"
              />
            </button>
          </div>

          <h1>Descrição</h1>
          <input placeholder={announcement?.description} />
        </Main>

        <Info>
          <strong>
          {`${announcement?.car.brand} ${announcement?.car.model}`}
          </strong>
          <h1>
            R$
            {announcement?.price}
            ,00
          </h1>

          <div>
            <img src={calendar} alt="Calendário" />
            <div>
              <p>Ano:</p>
              <strong>{announcement?.car.year_manufacture}</strong>
            </div>
          </div>

          <div>
            <img src={km} alt="Quilometragem" />
            <div>
              <p>Quilometragem:</p>
              <strong>
                {announcement?.car.km}
                km
              </strong>
            </div>
          </div>

          <div>
            <img src={color} alt="Cor" />
            <div>
              <p>Cor:</p>
              <strong>{announcement?.car.color}</strong>
            </div>
          </div>

          <div>
            <img src={gearbox_type} alt="Câmbio" />
            <div>
              <p>Câmbio:</p>
              <strong>{announcement?.car.gearbox_type}</strong>
            </div>
          </div>

          <div>
            <img src={direction} alt="Direção" />
            <div>
              <p>Direção:</p>
              <strong>{announcement ? 'Hidráulica' : 'Comum'}</strong>
            </div>
          </div>

          <div>
            <img src={fuel} alt="Combustível" />
            <div>
              <p>Combustível:</p>
              <strong>{announcement?.car.fuel}</strong>
            </div>
          </div>
          <div>
            <div>
              <p>Contato:</p>
              <strong>{`${announcement?.user.name} - ${announcement?.user.phone}`}</strong>
            </div>
          </div>

        </Info>
      </Content>
    </Container>
  );
};

export default ShowAnnouncement;
