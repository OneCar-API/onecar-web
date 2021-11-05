import React from 'react';

import Button from '../../../../../components/DefaultButton';
import searchIcon from '../../../../../assets/images/search.svg';

import { Container } from './styles';

const Search = () => {
  return (
    <Container>
      <div className="to-type">
        <img src={searchIcon} alt="" />
        <input id="id" type="text" placeholder="Ex.: Chevrolet Corsa" />
      </div>
      <div className="km">
        <p>De</p>
        <input id="id" type="number" placeholder="1000 Km" />
        <p>Até</p>
        <input id="id" type="number" placeholder="5000 Km" />
      </div>
      <Button>Buscar</Button>
    </Container>
  );
};

export default Search;
