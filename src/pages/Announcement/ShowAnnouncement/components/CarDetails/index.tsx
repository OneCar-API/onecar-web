/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes } from 'react';

import yearIcon from '../../../../../assets/images/year-icon.svg';
import brandIcon from '../../../../../assets/images/brand-icon.svg';
import kmIcon from '../../../../../assets/images/fuel-icon.svg';

import Button from '../../../../../components/DefaultButton';
import OwnerDetails from './components/OwnerDetails';
import { useAuth } from '../../../../../hooks/auth';

import { Container } from './styles';

interface ICarDetails extends HTMLAttributes<HTMLElement> {
  brandTitle: string;
  model: string;
  price: string;
  year: string;
  brand: string;
  km: string;
  description: string;
  ownerName?: string;
  ownerPhone?: number;
  setEdit: any;
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
}: ICarDetails) => {
  const { user } = useAuth();

  function handleEdit(bool: any) {
    setEdit(bool);
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
      </div>
      <div className="description">
        <h3>Descrição</h3>
        <p>
          {description ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        </p>
      </div>
      {user && (
        <>
          <Button className="btn" onClick={() => handleEdit(true)}>
            Editar
          </Button>
          <Button className="btn">Pausar</Button>
        </>
      )}

      <OwnerDetails ownerName={ownerName} ownerPhone={ownerPhone} />
    </Container>
  );
};

export default CarDetails;
