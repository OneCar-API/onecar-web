/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

import { useAuth } from '../../../../../../../../../hooks/auth';
import api from '../../../../../../../../../services/api';

import SecondaryButton from '../../../../../../../../../components/SecondaryButton';
import DefaultButton from '../../../../../../../../../components/DefaultButton';

interface iFields {
  setEdit: any;
}

const Fields = ({ setEdit }: iFields) => {
  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);
  const { token } = useAuth();

  function handleCancelEdit() {
    setEdit(false);
  }

  const obj = {
    description: '',
    manufacturer: '',
    brand: '',
    model: '',
    year_manufacture: '',
    fuel: '',
    km: '',
    vehicle_price: '',
  };

  async function setEditionAnnoucment(object: any) {
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

  return (
    <Container>
      <form>
        <div className="first-plot">
          <div>
            <h1>Marca</h1>
            <div className="input-box-a">
              <input
                type="text"
                placeholder=""
                name="brand"
                onChange={e => {
                  obj.brand = e.target.value;
                }}
              />
            </div>
          </div>
          <div>
            <h1>Modelo</h1>
            <div className="input-box-a">
              <input
                type="text"
                placeholder=""
                name="model"
                onChange={e => {
                  obj.model = e.target.value;
                }}
              />
            </div>
          </div>
          <div>
            <h1>Preço</h1>
            <div className="input-box-a">
              <input
                type="text"
                placeholder=""
                name="vehicle_price"
                onChange={e => {
                  obj.vehicle_price = e.target.value;
                }}
              />
            </div>
          </div>
        </div>
        <div className="second-plot">
          <div>
            <h1>Km</h1>
            <div className="input-box-b">
              <input
                type="number"
                placeholder=""
                name="km"
                onChange={e => {
                  obj.km = e.target.value;
                }}
              />
            </div>
          </div>
          <div>
            <h1>Ano</h1>
            <div className="input-box-b">
              <input
                type="text"
                placeholder=""
                name="year_manufacture"
                onChange={e => {
                  obj.year_manufacture = e.target.value;
                }}
              />
            </div>
          </div>
        </div>
        <div className="third-plot">
          <h1>Descrição do Veículo</h1>
          <div className="input-box-long">
            <textarea
              name="description"
              onChange={e => {
                obj.description = e.target.value;
              }}
            ></textarea>
          </div>
        </div>
        <div className="buttons">
          <SecondaryButton type="submit" onClick={handleCancelEdit}>
            Cancelar
          </SecondaryButton>
          <DefaultButton
            type="submit"
            onClick={() => setEditionAnnoucment(obj)}
          >
            Salvar
          </DefaultButton>
        </div>
      </form>
    </Container>
  );
};

export default Fields;
