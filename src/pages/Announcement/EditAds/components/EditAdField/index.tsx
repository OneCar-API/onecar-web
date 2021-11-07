import React from 'react';

import { Container, Content } from './styles';

import SecondaryButton from '../../../../../components/SecondaryButton';
import DefaultButton from '../../../../../components/DefaultButton';

import Fields from './components/Fields';

const EditAdField: React.FC = () => {
  return (
    <Container>
      <h1 id="main-title">Informações básicas</h1>
      <Content>
        <Fields />
        <div id="buttons">
          <SecondaryButton type="submit">Cancelar</SecondaryButton>

          <DefaultButton id="default-button" type="submit">
            Salvar
          </DefaultButton>
        </div>
      </Content>
    </Container>
  );
};

export default EditAdField;
