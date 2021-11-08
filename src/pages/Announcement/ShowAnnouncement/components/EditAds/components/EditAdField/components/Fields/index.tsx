/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

import api from '../../../../../../../../../services/api';

const Fields = () => {
  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);

  return (
    <Container>
      <form action={`/ads/${idString}`} method="post">
        <div className="first-plot">
          <div>
            <h1>Marca</h1>
            <div className="input-box-a">
              <input type="text" placeholder="" name="brand" />
            </div>
          </div>
          <div>
            <h1>Modelo</h1>
            <div className="input-box-a">
              <input type="text" placeholder="" name="model" />
            </div>
          </div>
          <div>
            <h1>Preço</h1>
            <div className="input-box-a">
              <input type="text" placeholder="" name="vehicle_price" />
            </div>
          </div>
        </div>
        <div className="second-plot">
          <div>
            <h1>Km</h1>
            <div className="input-box-b">
              <input type="number" placeholder="" name="km" />
            </div>
          </div>
          <div>
            <h1>Ano</h1>
            <div className="input-box-b">
              <input type="text" placeholder="" name="year_model" />
            </div>
          </div>
        </div>
        <div className="third-plot">
          <h1>Descrição do Veículo</h1>
          <div className="input-box-long">
            <textarea name="descripition"></textarea>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default Fields;
