import React, { useEffect, useState } from "react";

import { FiSearch, FiArrowLeft } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import { Container, Content, Header, HeaderContent, Form, Profile, Menu } from './style'

import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import Modal from '../../components/Modal'
import ImportAnnouncements from "../Announcement/ImportAnnouncements";

import logoImg from '../../assets/images/logo.svg';
import avatar from '../../assets/images/botaoUser.svg';
import viewImg from '../../assets/images/views.svg';
import likeImg from '../../assets/images/like.png'
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";



interface IAds {
    id: string;
    price: string;
    created_at: string;
    views: string;
    car: {
        id: string;
        manufacturer: string;
        brand: string;
        model: string;
        year_manufacture: string;
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
}


const AdsManagement: React.FC = () => {

    const [announcements, setAnnouncements] = useState<IAds[]>([]);

    const [modalActive, setModalActive] = useState(false)

    const { user, token, signOut } = useAuth();

    const [dropdownActive, setDropdownActive] = useState(false);

    const history = useHistory();

    useEffect(() => {
        loadCars();
    }, [])

    async function loadCars() {
        console.log(token)
        const response = await api.get('/ads/myAds/show', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response);

        setAnnouncements(response.data)

    }


    return (
        <Container>

            <Header>
                <HeaderContent>
                    <Link to="/adverts">
                        <FiArrowLeft size={25} />
                    </Link>
                    <img src={logoImg} alt="OneCar" />

                    <Form>
                        <input placeholder="Pesquisar" />
                        <button type="submit">
                            <FiSearch />
                        </button>
                    </Form>

                    {
                        user ?
                            <button type="button" onClick={() => history.push('/register-ads')}>Anunciar</button>
                            :
                            <button type="button" onClick={() => history.push('/signin')}>Entrar</button>
                    }
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
            <Menu>
                <h1>Seus anúncios</h1>
                <Button type="button" onClick={() => setModalActive(true)}>Importar</Button>
            </Menu>

            <Content>
                {announcements ? announcements.map(announcement => (
                    <div id="content">
                        <img 
                            src={announcement?.car.carImages[0].image}
                            alt="Carro"
                        />
                        <div id="description">
                            <h2>{`${announcement.car.brand} ${announcement.car.model}`}</h2>

                            <div className="views">
                                <img src={viewImg} alt="view" className="icons" />
                                <p>
                                    {`${announcement?.views ? announcement?.views : 0} visualizações`}
                                </p>
                            </div>

                            {/* <div className="likes">
                                <img src={likeImg} alt="like" className="icons" />
                                <p>12 curtidas</p>
                            </div> */}

                            {/* <p className="date">Publicado em 29 de Setembro</p> */}
                        </div>
                    </div>
                )) : <h3>Você não possui nenhum anúncio...</h3>}

            </Content>
            <Modal
                hideModal={() => setModalActive(false)}
                active={modalActive}
                width='800px'
                title='Importar Anúncio'
                contentDisplay='block'
                fadeInDisplay='block'
                maxWidth='800px'
            >
                <ImportAnnouncements />
            </Modal>
        </Container>



    );
}

export default AdsManagement;