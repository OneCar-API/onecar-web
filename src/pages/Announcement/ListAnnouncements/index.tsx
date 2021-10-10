import React, { useEffect, useState } from 'react';

import { FiSearch, FiHeart } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import Modal from '../../../components/Modal';
import Menu from '../../../components/Menu';
import ImportAnnouncement from '../ImportAnnouncements'
import Dropdown from '../../../components/Dropdown'

import {
  Container,
  Header,
  HeaderContent,
  Form,
  Profile,
  Announcements,
  Visualization,
  Main,
  GridIcon,
  ListIcon
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
    vehicle_item_id: {
      airbag: boolean;
      alarm: boolean;
      air_conditioning: boolean;
      eletric_lock: boolean;
      eletric_window: boolean;
      stereo: boolean;
      reverse_sensor: boolean;
      reverse_camera: boolean;
      armoured: boolean;
      hydraulic_steering: boolean;
    }
  };
}

const ListAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<IAds[]>([]);

  const [modalActive, setModalActive] = useState(false)
  const [selected, setSelected] = useState('list')

  const { token, user, signOut } = useAuth();

  const [dropdownActive, setDropdownActive] = useState(false);

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

    setAnnouncements(response.data);
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
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="OneCar" />

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

      <body>
        <Announcements>
          <Visualization>
            <GridIcon
              selected={selected}
              size={30}
              onClick={() => {
                setVisualization('flex')
                setSelected('grid')
              }}
            />
            <ListIcon
              selected={selected}
              size={30}
              onClick={() => {
                setVisualization('block')
                setSelected('list')
              }}
            />
          </Visualization>
          <Menu display={visualization}>
            {announcements.map(announcement => (
              <Main
                display={visualization}
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
                    </p>
                    <FiHeart size={20} />
                  </div>

                  <div>
                    <img src={gearbox_type} alt="Câmbio" />
                    <p>{announcement.car_id.gearbox_type}</p>
                  </div>

                  <div>
                    <img src={direction} alt="Direção" />
                    <p>{announcement?.car_id.vehicle_item_id?.hydraulic_steering ? 'Hidráulica' : 'Comum'}</p>
                  </div>

                  <hr />
                  <h4>São José dos Campos - SP</h4>
                </div>
              </Main>
            ))}
          </Menu>
        </Announcements>
        <Modal
          hideModal={() => setModalActive(false)}
          active={modalActive}
          width='800px'
          title='Importar Anúncio'
          contentDisplay='block'
          fadeInDisplay='block'
          maxWidth='800px'
        >
          <ImportAnnouncement />
        </Modal>
      </body>
    </Container>
  );
  ;
}

export default ListAnnouncements;
