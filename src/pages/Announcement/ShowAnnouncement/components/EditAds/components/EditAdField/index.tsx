import React from 'react';

import { Container, Content } from './styles';

import Fields from './components/Fields';

interface iEditAdField {
  setEdit: any;
}

const EditAdField = ({ setEdit }: iEditAdField) => {
  return (
    <Container>
      <h1 id="main-title">Informações básicas</h1>
      <Content>
        <Fields setEdit={setEdit} />
      </Content>
    </Container>
  );
};

export default EditAdField;
