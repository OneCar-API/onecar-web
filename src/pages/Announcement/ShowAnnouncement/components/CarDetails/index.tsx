/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes } from 'react';
import { useLocation } from 'react-router-dom';

import yearIcon from '../../../../../assets/images/year-icon.svg';
import brandIcon from '../../../../../assets/images/brand-icon.svg';
import kmIcon from '../../../../../assets/images/fuel-icon.svg';

import Button from '../../../../../components/DefaultButton';
import SecondaryButton from '../../../../../components/SecondaryButton';
import OwnerDetails from './components/OwnerDetails';

import api from '../../../../../services/api';

import { useAuth } from '../../../../../hooks/auth';
import { Container } from './styles';

interface ICarDetails extends HTMLAttributes<HTMLElement> {
  brandTitle: string;
  model: string;
  price: string;
  year: string;
  brand: string;
  km: number;
  description: string;
  ownerName?: string;
  ownerPhone?: number;
  setEdit: any;
  user: any;
  announcementUser: any;
  isPausedAd: boolean;
}

const CarDetails = ({
  brandTitle,
  model,
  price,
  year,
  brand,
  km,
  description,
  ownerName,
  ownerPhone,
  setEdit,
  user,
  announcementUser,
  isPausedAd,
}: ICarDetails) => {
  function handleEdit(bool: any) {
    setEdit(bool);
  }

  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);
  const { token } = useAuth();

  const obj = {
    description: description,
    brand: brand,
    model: model,
    year_manufacture: year,
    km: km,
    vehicle_price: price,
    paused: true,
  };

  async function setPauseAd(object: any) {
    try {
      const response = await api.put(`/ads/${idString}`, object, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });

      window.location.reload();
      return response.status;
    } catch (error: any) {
      return error.response;
    }
  }

  function handleResumeAd() {
    obj.paused = false;
    setPauseAd(obj);
  }

  function handleSetPauseAd() {
    obj.paused = true;
    setPauseAd(obj);
  }

  return (
    <Container>
      <div className="title">
        <h1>{brandTitle || 'Nome não atribuido'}</h1>
        <h1>{model || 'Modelo não atribuido'}</h1>
      </div>
      <div className="main-details">
        <h3>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(price))}
        </h3>
        <div>
          <img src={yearIcon} alt="" />
          <p>{year || 'Ano não atribuido'}</p>
        </div>
        <div>
          <img src={brandIcon} alt="" />
          <p>{brand || 'Modelo não atribuido'}</p>
        </div>
        <div>
          <img src={kmIcon} alt="" />
          <p>{km !== null ? `${km} Km rodados` : 'Km não atribuido'}</p>
        </div>
        <div>
          <p className="isPausedAd">
            {isPausedAd ? '⚠️ Anúncio pausado ' : ''}
          </p>
        </div>
      </div>
      <div className="description">
        <h3>Descrição</h3>
        <p>
          {description ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        </p>
      </div>
      {user?.id === announcementUser?.id && (
        <div className="buttons">
          <Button className="btn" onClick={() => handleEdit(true)}>
            Editar
          </Button>

          {isPausedAd ? (
            <SecondaryButton className="btn" onClick={() => handleResumeAd()}>
              Retomar
            </SecondaryButton>
          ) : (
            <SecondaryButton className="btn" onClick={() => handleSetPauseAd()}>
              Pausar
            </SecondaryButton>
          )}
        </div>
      )}

      {user?.id !== announcementUser?.id && (
        <OwnerDetails
          user={user}
          announcementUser={announcementUser}
          ownerName={ownerName}
          ownerPhone={ownerPhone}
        />
      )}
    </Container>
  );
};

export default CarDetails;
