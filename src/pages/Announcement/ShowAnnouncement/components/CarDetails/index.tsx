import React, { HTMLAttributes } from 'react';

import yearIcon from '../../../../../assets/images/year-icon.svg';
import brandIcon from '../../../../../assets/images/brand-icon.svg';
import fuelIcon from '../../../../../assets/images/fuel-icon.svg';

import Button from '../../../../../components/DefaultButton';
import OwnerDetails from './components/OwnerDetails';

import { Container } from './styles';

interface ICarDetails extends HTMLAttributes<HTMLElement> {
  brandTitle: string;
  model: string;
  price: string;
  year: string;
  brand: string;
  fuel: string;
  description: string;
  ownerName?: string;
  ownerPhone?: number;
}

const CarDetails = ({
  brandTitle,
  model,
  price,
  year,
  brand,
  fuel,
  description,
  ownerName,
  ownerPhone,
}: ICarDetails) => {
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
          <img src={fuelIcon} alt="" />
          <p>{fuel || 'Combustível não atribuido'}</p>
        </div>
      </div>
      <div className="description">
        <h3>Descrição</h3>
        <p>
          {description ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        </p>
      </div>
      <Button className="btn">Editar</Button>
      <OwnerDetails ownerName={ownerName} ownerPhone={ownerPhone} />
    </Container>
  );
};

export default CarDetails;
