import React, { useState } from "react";

import { Link, useHistory } from 'react-router-dom';

import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import {
  Container,
  Content,
  Header,
  HeaderContent,
  First,
  Profile,
  IconVoltar
} from './style'

import Button from '../../../components/Button'
import Dropdown from '../../../components/Dropdown'

import final from '../../../assets/images/final.svg'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';
import { useAuth } from "../../../hooks/auth";



const RegisterAdsMsg: React.FC = () => {

  const [dropdownActive, setDropdownActive] = useState(false);

  const {signOut} = useAuth();

  const history = useHistory();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/adverts">
            <FiArrowLeft size={25} />
          </Link>
          <img src={logoImg} alt="OneCar" />

          <First>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </First>

          <Profile onClick={() => setDropdownActive(true)}>
            <img src={avatar} alt="User" />
          </Profile>
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

        <h1>Parabéns, seu anúncio foi inserido!</h1>


        <img src={final} alt="Concluído com sucesso" />

        <h2>Você pode conferir seu anúncio no painel de administração de anúncios</h2>

        <Button type="button" onClick={() => history.push('/ads-management')}>Meus anúncios</Button>

      </Content>


    </Container>


  )
}

export default RegisterAdsMsg;