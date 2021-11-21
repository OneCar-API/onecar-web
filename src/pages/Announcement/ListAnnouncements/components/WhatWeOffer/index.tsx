/* eslint-disable react/self-closing-comp */
import React from 'react';

import { Container } from './styles';

const WhatWeOffer = () => {
  return (
    <Container>
      <div className="blue-text">
        <div className="line" />
        <p>O QUE OFERECEMOS</p>
        <div className="line" />
      </div>
      <h1>Últimos anúncios</h1>
      <p>Anúncios mais recentes carregados na OneCar</p>
    </Container>
  );
};

export default WhatWeOffer;
