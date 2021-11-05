import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import avatar from '../../assets/images/user.svg';
import logoImg from '../../assets/images/logo.svg';
import Dropdown from '../Dropdown';
import DefaultButton from '../DefaultButton';

import { Container, Header, HeaderContent, Form, Profile } from './styles';
import { useAuth } from '../../hooks/auth';
import useIsMobile from '../../hooks/useIsMobile';

const TopBar: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div className="logo-and-search">
            <Link to="/adverts">
              <img src={logoImg} alt="OneCar" />
            </Link>
          </div>
          {user ? (
            <>
              <div className="profile">
                <DefaultButton
                  type="button"
                  onClick={() => history.push('/register-ads')}
                >
                  Anunciar
                </DefaultButton>
                <Profile onClick={() => setDropdownActive(true)}>
                  <img src={avatar} alt="User" />
                </Profile>
              </div>
            </>
          ) : (
            <>
              <div className="profile">
                <Profile onClick={() => history.push('/signin')}>
                  <p>Entrar</p>
                  <img src={avatar} alt="User" />
                </Profile>
              </div>
            </>
          )}
        </HeaderContent>
      </Header>
      <Dropdown
        hideMenu={() => setDropdownActive(false)}
        active={dropdownActive}
        width="300px"
        contentDisplay="block"
        fadeInDisplay="block"
        maxWidth="400px"
      >
        <ul>
          <li>
            <DefaultButton
              type="button"
              onClick={() => history.push('/ads-management')}
            >
              Meus Anúncios
            </DefaultButton>
          </li>
          <hr />
          <li>
            <DefaultButton type="button" onClick={() => signOut()}>
              Sair
            </DefaultButton>
          </li>
        </ul>
      </Dropdown>
    </Container>
  );
};

export default TopBar;
