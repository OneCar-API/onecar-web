import React from 'react';

import { Container, Content } from './styles';

import Fields from './components/Fields';

interface iEditAdField {
  setEdit: any;
}

const EditAdField = ({ setEdit }: iEditAdField) => {
  return (
    <Container>
      <Content>
        <Fields setEdit={setEdit} />
      </Content>
    </Container>
  );
};

export default EditAdField;
