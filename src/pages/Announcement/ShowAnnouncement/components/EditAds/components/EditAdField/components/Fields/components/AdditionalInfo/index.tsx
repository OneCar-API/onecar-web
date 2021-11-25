/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
import React from 'react';

import SecondaryButton from '../../../../../../../../../../../components/SecondaryButton';
import DefaultButton from '../../../../../../../../../../../components/DefaultButton';

import { Container } from './styles';

interface iAdditionalInfo {
  setAdditionalInfo: any;
}

const AdditionalInfo = ({ setAdditionalInfo }: iAdditionalInfo) => {
  return (
    <Container>
      <h1>Informações adicionais</h1>
      <div className="add-checks">
        <form action="">
          <div>
            <input type="checkbox" name="air_conditioning" />
            <label> Ar Condicionado</label>
          </div>
          <div>
            <input type="checkbox" name="alarm" />
            <label> Alarme</label>
          </div>
          <div>
            <input type="checkbox" name="airbag" />
            <label> Airbag</label>
          </div>
          <div>
            <input type="checkbox" name="eletric_window" />
            <label> Vidro elétrico</label>
          </div>
          <div>
            <input type="checkbox" name="eletric_lock" />
            <label> Tranca elétrica</label>
          </div>
          <div>
            <input type="checkbox" name="stereo" />
            <label> Som</label>
          </div>
          <div>
            <input type="checkbox" name="reverse_sensor" />
            <label> Sensor de ré</label>
          </div>
          <div>
            <input type="checkbox" name="reverse_camera" />
            <label> Câmera de ré</label>
          </div>

          <div className="buttons">
            <SecondaryButton
              type="submit"
              onClick={() => setAdditionalInfo(false)}
            >
              Cancelar
            </SecondaryButton>
            <DefaultButton type="submit">Salvar</DefaultButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AdditionalInfo;
