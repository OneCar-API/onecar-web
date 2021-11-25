/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

import { useAuth } from '../../../../../../../../../hooks/auth';
import api from '../../../../../../../../../services/api';

import AdditionalInfo from './components/AdditionalInfo';
import SecondaryButton from '../../../../../../../../../components/SecondaryButton';
import DefaultButton from '../../../../../../../../../components/DefaultButton';

interface iFields {
  setEdit: any;
}

const Fields = ({ setEdit }: iFields) => {
  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);
  const { token } = useAuth();

  const [additionalInfo, setAdditionalInfo] = useState(false);

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
      const response = await api.post(`/ads/${idString}`, object, {
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
      <>
        {additionalInfo ? (
          <AdditionalInfo setAdditionalInfo={setAdditionalInfo} />
        ) : (
          <form>
            <h1 id="main-title">Informações básicas</h1>
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

            <div className="additional-info-btn">
              <h1>Informações adicionais</h1>
              <SecondaryButton
                type="submit"
                onClick={() => setAdditionalInfo(true)}
              >
                Editar
              </SecondaryButton>
            </div>

            <div className="buttons">
              <SecondaryButton type="submit" onClick={handleCancelEdit}>
                Voltar
              </SecondaryButton>
              <DefaultButton
                type="submit"
                onClick={() => setEditionAnnoucment(obj)}
              >
                Salvar
              </DefaultButton>
            </div>
          </form>
        )}
      </>
    </Container>
  );
};

export default Fields;
