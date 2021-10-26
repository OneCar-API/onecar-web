import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import avatar from '../../assets/images/user.svg';
import logoImg from '../../assets/images/logo.svg';
import Dropdown from '../Dropdown';
import TopButton from './components/TopButton';

import { Container, Header, HeaderContent, Form, Profile } from './styles';
import { useAuth } from '../../hooks/auth';

const TopBar: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div className="logo-and-search">
            <Link to="/">
              <img src={logoImg} alt="OneCar" />
            </Link>

            <Form>
              <input placeholder="Pesquisar" />
              <button type="submit">
                <FiSearch />
              </button>
            </Form>
          </div>
          {user ? (
            <>
              <div className="profile">
                <TopButton
                  type="button"
                  onClick={() => history.push('/register-ads')}
                >
                  Anunciar
                </TopButton>
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
            <TopButton
              type="button"
              onClick={() => history.push('/ads-management')}
            >
              Meus Anúncios
            </TopButton>
          </li>
          <hr />
          <li>
            <TopButton type="button" onClick={() => signOut()}>
              Sair
            </TopButton>
          </li>
        </ul>
      </Dropdown>
    </Container>
  );
};

export default TopBar;
