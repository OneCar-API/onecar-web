/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../../../../../../../../../hooks/auth';

import SecondaryButton from '../../../../../../../../../../../components/SecondaryButton';
import DefaultButton from '../../../../../../../../../../../components/DefaultButton';

import api from '../../../../../../../../../../../services/api';

import { Container } from './styles';

interface iAdditionalInfo {
  setAdditionalInfo: any;
}

const AdditionalInfo = ({ setAdditionalInfo }: iAdditionalInfo) => {
  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);
  const { token } = useAuth();

  const obj = {
    airbag: false,
    alarm: false,
    air_conditioning: false,
    eletric_lock: false,
    eletric_window: false,
    stereo: false,
    reverse_sensor: false,
    reverse_camera: false,
    armoured: false,
    hydraulic_steering: false,
  };

  async function setAddInformation(object: any) {
    try {
      const response = await api.put(`/ads/vehicle-items/${idString}`, object, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });

      console.log('response', response);

      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  return (
    <Container>
      <h1>Informações adicionais</h1>
      <div className="add-checks">
        <form action="" method="put">
          <div>
            <input
              type="checkbox"
              name="air_conditioning"
              onChange={e => {
                obj.air_conditioning = !obj.air_conditioning;
                console.log(!obj.air_conditioning);
              }}
            />
            <label> Ar Condicionado</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="alarm"
              onChange={e => {
                obj.alarm = !!obj.alarm;
                console.log(!!obj.alarm);
              }}
            />
            <label> Alarme</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="airbag"
              onChange={e => {
                obj.airbag = !!obj.airbag;
                console.log(!!obj.airbag);
              }}
            />
            <label> Airbag</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="eletric_window"
              onChange={e => {
                obj.eletric_window = !!obj.eletric_window;
                console.log(!!obj.eletric_window);
              }}
            />
            <label> Vidro elétrico</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="eletric_lock"
              onChange={e => {
                obj.eletric_lock = !!obj.eletric_lock;
                console.log(!!obj.eletric_lock);
              }}
            />
            <label> Tranca elétrica</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="stereo"
              onChange={e => {
                obj.stereo = !!obj.stereo;
                console.log(!!obj.stereo);
              }}
            />
            <label> Som</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="reverse_sensor"
              onChange={e => {
                obj.reverse_sensor = !!obj.reverse_sensor;
                console.log(!!obj.reverse_sensor);
              }}
            />
            <label> Sensor de ré</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="reverse_camera"
              onChange={e => {
                obj.reverse_camera = !!obj.reverse_camera;
                console.log(!!obj.reverse_camera);
              }}
            />
            <label> Câmera de ré</label>
          </div>

          <div className="buttons">
            <SecondaryButton
              type="submit"
              onClick={() => setAdditionalInfo(false)}
            >
              Cancelar
            </SecondaryButton>
            <DefaultButton type="submit" onClick={() => setAddInformation(obj)}>
              Salvar
            </DefaultButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AdditionalInfo;
