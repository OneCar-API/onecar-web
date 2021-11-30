/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { HTMLAttributes } from 'react';

import moment from 'moment';
import Button from '../../../../../../../components/DefaultButton';

import { Container } from './styles';

interface IAd extends HTMLAttributes<HTMLElement> {
  image: string;
  year: string;
  brand: string;
  model: string;
  price: number;
  created_at: string;
  isPausedAd: boolean;
}

const Ad = ({
  image,
  year,
  brand,
  model,
  price,
  created_at,
  isPausedAd,
}: IAd) => {
  return (
    <Container>
      <img src={image} alt="" />
      <div className="tags">
        <div className="year">
          <p>{year}</p>
        </div>

        {isPausedAd && (
          <div className="isPausedAd">
            <p> Pausado </p>
          </div>
        )}
      </div>

      <div className="car-and-price">
        <h1>{brand}</h1>
        <h1>{model}</h1>
      </div>
      <h1>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(price))}
      </h1>

      <div className="date">
        <p>
          Data do anúncio:
          <strong>{moment(created_at).format('MMM DD, YYYY')}</strong>
        </p>
      </div>
      <div className="btn">
        <Button>Ver mais</Button>
      </div>
    </Container>
  );
};

export default Ad;
