import React, { useState } from "react";

import { FiSearch,} from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import {Container, Content, Header, HeaderContent, Form, Profile, Menu} from './styles'

import Button from '../../components/Button'

import logoImg from '../../assets/images/logo.svg';
import avatar from '../../assets/images/botaoUser.svg';
import viewImg from '../../assets/images/views.svg';
import likeImg from '../../assets/images/like.png';
import { useAuth } from "../../hooks/auth";


const AdmAds: React.FC = () => {

    const [modalActive, setModalActive] = useState(false)

    const { user } = useAuth();

    const history = useHistory();
    
  return(
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
                <button type="button" onClick={() => setModalActive(true)}>Anunciar</button>
                :
                <button type="button" onClick={() => history.push('/signin')}>Entrar</button>
            }
            <Profile>
                <img src={avatar} alt="User" />
            </Profile>
            </HeaderContent>
        </Header>

        <Menu>
            <h1>Seus anúncios</h1>
            <Button type="submit">Importar</Button>
        </Menu>

        <Content>
            <div id="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU" alt="carro" />
                <div id="description">
                    <h2>Chevrolet Corsa</h2>
                    
                    <div className="views">
                        <img src={viewImg} alt="view" className="icons" />
                        <p>89 visualizações</p>
                    </div>

                    <div className="likes">
                        <img src={likeImg} alt="like" className="icons" />
                        <p>12 curtidas</p>
                    </div>
                    
                    <p className="date">Publicado em 29 de Setembro</p>
                </div>
            </div>
        </Content>

    </Container>
    

    
  );
}

export default AdmAds;
