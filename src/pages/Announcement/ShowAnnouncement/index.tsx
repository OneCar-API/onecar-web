import React from 'react';

import { FiSearch, FiArrowLeft } from 'react-icons/fi';

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

const ShowAnnouncement: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <FiArrowLeft size={25} />

        <Form>
          <input placeholder="Pesquisar" />
          <button type="submit">
            <FiSearch />
          </button>
        </Form>

        <button type="button">Anunciar</button>

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
        <h1>R$ 88.950,00</h1>

        <div>
          <img src={calendar} alt="Calendário" />
          <div>
            <p>Ano:</p>
            <strong>2021</strong>
          </div>
        </div>

        <div>
          <img src={km} alt="Quilometragem" />
          <div>
            <p>Quilometragem:</p>
            <strong>88.000km</strong>
          </div>
        </div>

        <div>
          <img src={color} alt="Cor" />
          <div>
            <p>Cor:</p>
            <strong>Vermelho</strong>
          </div>
        </div>

        <div>
          <img src={exchange} alt="Câmbio" />
          <div>
            <p>Câmbio:</p>
            <strong>Automático</strong>
          </div>
        </div>

        <div>
          <img src={motor} alt="Motor" />
          <div>
            <p>Motor:</p>
            <strong>2.0</strong>
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

export default ShowAnnouncement;
