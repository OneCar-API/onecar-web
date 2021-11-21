import React from 'react';

import Button from '../../../../../../../components/DefaultButton';

import { Container } from './styles';

interface IOwner {
  ownerName?: string;
  ownerPhone?: number;
}

const OwnerDetails = ({ ownerName, ownerPhone }: IOwner) => {
  return (
    <Container>
      <h2>{ownerName || 'Usuário sem Nome'}</h2>
      <p>{ownerPhone || 'Usuário sem telefone'}</p>
      <div>
        <Button>Mensagem</Button>
      </div>
    </Container>
  );
};

export default OwnerDetails;
