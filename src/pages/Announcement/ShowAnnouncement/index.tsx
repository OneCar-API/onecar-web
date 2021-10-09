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
import gearbox_type from '../../../assets/images/shift.svg';
import motor from '../../../assets/images/motor.svg';
import direction from '../../../assets/images/direction.svg';
import fuel from '../../../assets/images/fuel.svg';
import door from '../../../assets/images/door.svg';
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

const ShowAnnouncement: React.FC = () => {
  const [announcement, setAnnouncement] = useState<IAds>();

  const { token } = useAuth();

  const id = useParams();

  useEffect(() => {
    showAnnouncements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function showAnnouncements() {
    const response = await api.get(`ads/${id}`, {
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
          <Link to="/adverts">
            <FiArrowLeft size={25} />
          </Link>

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

      <Content>
        <Main>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU"
            alt="Carro"
          />

          <div>
            <button type="button">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU"
                alt="Carro"
              />
            </button>

            <button type="button">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU"
                alt="Carro"
              />
            </button>

            <button type="button">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU"
                alt="Carro"
              />
            </button>

            <button type="button">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU"
                alt="Carro"
              />
            </button>
          </div>

          <h1>Descrição</h1>
          <textarea>Carro bem conservado. Único dono.</textarea>
          {/* <input placeholder= /> */}
        </Main>

        <Info>
          <strong>Honda Civic</strong>
          <h1>R$25000,00</h1>

          <div>
            <img src={calendar} alt="Calendário" />
            <div>
              <p>Ano:</p>
              <strong>2010</strong>
            </div>
          </div>

          <div>
            <img src={km} alt="Quilometragem" />
            <div>
              <p>Quilometragem:</p>
              <strong>80000km</strong>
            </div>
          </div>

          <div>
            <img src={color} alt="Cor" />
            <div>
              <p>Cor:</p>
              <strong>Preto</strong>
            </div>
          </div>

          <div>
            <img src={gearbox_type} alt="Câmbio" />
            <div>
              <p>Câmbio:</p>
              <strong>Manual</strong>
            </div>
          </div>

          <div>
            <img src={motor} alt="Motor" />
            <div>
              <p>Motor:</p>
              <strong>1.8</strong>
            </div>
          </div>

          <div>
            <img src={direction} alt="Direção" />
            <div>
              <p>Direção:</p>
              <strong>Hidráulica</strong>
            </div>
          </div>

          <div>
            <img src={fuel} alt="Combustível" />
            <div>
              <p>Combustível:</p>
              <strong>Flex</strong>
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
