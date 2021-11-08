import React from 'react';

import { Container, Content } from './styles';

import SecondaryButton from '../../../../../../../components/SecondaryButton';
import DefaultButton from '../../../../../../../components/DefaultButton';

import Fields from './components/Fields';

interface iEditAdField {
  setEdit: any;
}

const EditAdField = ({ setEdit }: iEditAdField) => {
  function handleCancelEdit() {
    setEdit(false);
  }

  return (
    <Container>
      <h1 id="main-title">Informações básicas</h1>
      <Content>
        <Fields />
        <div className="buttons">
          <SecondaryButton type="submit" onClick={handleCancelEdit}>
            Cancelar
          </SecondaryButton>
          <DefaultButton type="submit">Salvar</DefaultButton>
        </div>
      </Content>
    </Container>
  );
};

export default EditAdField;
