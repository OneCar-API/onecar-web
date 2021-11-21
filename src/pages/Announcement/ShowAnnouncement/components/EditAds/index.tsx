/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Container, Content } from './styles';

import DisplayAd from './components/DisplayAd';

import EditAdField from './components/EditAdField';

interface iEditAdField {
  picture: string;
  model: string;
  year: string;
  brand: string;
  description: string;
  setEdit: any;
}

const EditAds = ({
  setEdit,
  picture,
  model,
  year,
  brand,
  description,
}: iEditAdField) => {
  return (
    <Container>
      <Content>
        <DisplayAd
          picture={picture}
          brand={brand}
          model={model}
          year={year}
          description={description}
        />
        <EditAdField setEdit={setEdit} />
      </Content>
    </Container>
  );
};

export default EditAds;
