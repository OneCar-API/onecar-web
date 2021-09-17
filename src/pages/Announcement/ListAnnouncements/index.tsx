import React from 'react';

import { FiSearch, FiHeart, FiGrid, FiList } from 'react-icons/fi';

import { 
  Container, 
  Header, 
  HeaderContent, 
  Form, Profile, 
  Announcements, 
  Visualization, 
  Main,
} from './styles';

import logoImg from '../../../assets/images/logo.svg';
import avatar from '../../../assets/images/botaoUser.svg';
import exchange from '../../../assets/images/shift.svg';
import motor from '../../../assets/images/motor.svg';
import direction from '../../../assets/images/direction.svg';

const Announcement: React.FC = () => (
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

        <button type="button">Anunciar</button>

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
        
        <Main>
          <a href="teste">
            <img src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx" alt="Jeep Renegade" />
            
            <div>
              <strong>Jeep Renegade</strong>
              <p>2020/2021</p>

              <h1>R$ 88.950,00</h1>

            </div>
            
            <div id="info">
              <div>
                <p>147.000km</p>
                <FiHeart size={20} />
              </div>
              
              <div>
                <img src={exchange} alt="Câmbio" />
                <p>Automático</p>
              </div>

              <div>
                <img src={motor} alt="Potência do motor" />
                <p>2.0</p>
              </div>

              <div>
                <img src={direction} alt="Direção" />
                <p>Direção Hidráulica</p>
              </div>

              <hr/>
              <h4>São José dos Campos - SP</h4>
            </div>
          </a>
          

          <a href="teste">
            <img src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx" alt="Jeep Renegade" />
            
            <div>
              <strong>Jeep Renegade</strong>
              <p>2020/2021</p>

              <h1>R$ 88.950,00</h1>

            </div>

            <div id="info">
              <div>
                <p>147.000km</p>
                <FiHeart size={20} />
              </div>
              
              <div>
                <img src={exchange} alt="Câmbio" />
                <p>Automático</p>
              </div>

              <div>
                <img src={motor} alt="Potência do motor" />
                <p>2.0</p>
              </div>

              <div>
                <img src={direction} alt="Direção" />
                <p>Direção Hidráulica</p>
              </div>
              
              <hr/>
              <h4>São José dos Campos - SP</h4>
            </div>
          </a>

          <a href="teste">
            <img src="https://cdn.buttercms.com/Aq0QB1qQQEuSfH03HzOx" alt="Jeep Renegade" />
            
            <div>
              <strong>Jeep Renegade</strong>
              <p>2020/2021</p>

              <h1>R$ 88.950,00</h1>

            </div>

            <div id="info">
              <div>
                <p>147.000km</p>
                <FiHeart size={20} />
              </div>
              
              <div>
                <img src={exchange} alt="Câmbio" />
                <p>Automático</p>
              </div>

              <div>
                <img src={motor} alt="Potência do motor" />
                <p>2.0</p>
              </div>

              <div>
                <img src={direction} alt="Direção" />
                <p>Direção Hidráulica</p>
              </div>
              
              <hr/>
              <h4>São José dos Campos - SP</h4>
            </div>
          </a>
        </Main>
      </Announcements>
    </body>
  </Container>
);

export default Announcement;