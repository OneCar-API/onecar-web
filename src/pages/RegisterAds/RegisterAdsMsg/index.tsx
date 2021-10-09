
import React from "react";

import { FiSearch} from 'react-icons/fi';
import {Container,
  Content,
  Header,
  HeaderContent,
  First, 
  Profile, 
IconVoltar} from './style'

import Button from '../../../components/Button'

import final from '../../../assets/images/final.svg'
import avatar from '../../../assets/images/botaoUser.svg';
import logoImg from '../../../assets/images/logo.svg';
import back from '../../../assets/images/seta.svg';



const RegisterAdsMsg: React.FC = () => {
  return(
    <Container>
      <Header>
        <HeaderContent>
          <IconVoltar>
            <button type='submit'><img src={back} alt="Voltar" /></button>
          </IconVoltar>  
          <img src={logoImg} alt="OneCar" />

          <First>
            <input placeholder="Pesquisar" />
            <button type="submit">
              <FiSearch />
            </button>
          </First>

          <Profile>
            <img src={avatar} alt="User" />
          </Profile>
        </HeaderContent>
      </Header>

      <Content>
      
        <h1>Parabéns, seu anúncio foi inserido!</h1>

             
        <img src={final} alt="Concluído com sucesso" />

        <h2>Você pode conferir seu anúncio no painel de administração de anúncios</h2>
          
        <Button type="submit">Meus anúncios</Button>

      </Content>
      
      
    </Container>


  )
}

export default RegisterAdsMsg;
