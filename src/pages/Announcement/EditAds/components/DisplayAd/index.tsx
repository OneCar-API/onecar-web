import React from 'react';

import SecondaryButton from '../../../../../components/SecondaryButton';

import car from '../../../../../assets/images/carro.png';

import { Container } from './styles';

const DisplayAd: React.FC = () => {
  return (
    <Container>
      <h1>Edição do anúncio</h1>

      <img src={car} alt="carro" />
      <h1 id="title">Chevrolet Corsa</h1>
      <h2>2018</h2>

      <SecondaryButton type="button">Deletar</SecondaryButton>

      <div>
        <h3>Descrição do Veículo</h3>

        <p>
          Carro muito bem conservado, único dono, todas as manutenções em dia.
          Muito econônico e esperto, ideial para quem quer um carro completo e
          que não te deixará na mão.
        </p>
      </div>
    </Container>
  );
};

export default DisplayAd;
