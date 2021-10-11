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
import likeImg from '../../assets/images/like.png';
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";


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
        const response = await api.get('/ads', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);

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