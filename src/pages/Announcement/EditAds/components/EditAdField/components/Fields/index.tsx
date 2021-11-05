import React from 'react';

import { Container } from './styles';

const Fields = () => {
  return (
    <Container>
      <form>
        <div className="first-plot">
          <div>
            <h1>Marca</h1>
            <input id="short-field" type="text" placeholder="" />
          </div>

          <div>
            <h1>Modelo</h1>
            <input id="short-field" type="text" placeholder="" />
          </div>
        </div>

        <div className="second-plot">
          <div>
            <h1>Combustível</h1>
            <input id="short-field" type="text" placeholder="" />
          </div>

          <div>
            <h1>Km</h1>
            <input id="short-field" type="text" placeholder="" />
          </div>
        </div>

        <div className="third-plot">
          <h1>Descrição do Veículo</h1>
          <input id="long-field" type="text" placeholder="" />
        </div>
      </form>
    </Container>
  );
};

export default Fields;
