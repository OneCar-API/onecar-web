/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import Button from '../../../../../components/DefaultButton';
import searchIcon from '../../../../../assets/images/search.svg';

import api from '../../../../../services/api';

import { Container } from './styles';

interface ISearch {
  setAds: any;
}

const Search = ({ setAds }: ISearch) => {
  const [inputCar, setInputCar] = useState('');

  async function setSearch() {
    const response = await api.get(`/ads?car=${inputCar}`);
    setAds(response?.data?.results);
  }

  function handleKeyPressed(e: any) {
    if (e.key === 'Enter') {
      setSearch();
    } else if (e.key === 'Backspace' && inputCar.length) {
      setSearch();
    }
  }

  function handleInputEvent(e: any) {
    const searchEventValue = e?.target?.value;
    setInputCar(searchEventValue);
  }

  return (
    <Container>
      <div className="to-type">
        <img src={searchIcon} alt="" />
        <input
          id="id"
          type="text"
          placeholder="Ex.: Chevrolet Corsa"
          value={inputCar}
          onChange={handleInputEvent}
          onKeyDown={handleKeyPressed}
        />
      </div>
      {/* <div className="km">
        <p>De</p>
        <input id="id" type="number" placeholder="1000 Km" />
        <p>Até</p>
        <input id="id" type="number" placeholder="5000 Km" />
      </div> */}
      <Button onClick={() => setSearch()}>Buscar</Button>
    </Container>
  );
};

export default Search;
