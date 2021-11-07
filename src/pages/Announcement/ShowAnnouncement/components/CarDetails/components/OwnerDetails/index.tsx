import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../../../../../components/DefaultButton';

import { Container } from './styles';

interface IOwner {
  ownerName?: string;
  ownerPhone?: number;
}

const OwnerDetails = ({ ownerName, ownerPhone }: IOwner) => {

  const history = useHistory()

  function openChat(){
    history.push('/chat-room')
  }

  return (
    <Container>
      <h2>{ownerName || 'Usuário sem Nome'}</h2>
      <p>{ownerPhone || 'Usuário sem telefone'}</p>
      <div>
        <Button onClick={() => openChat()}>Mensagem</Button>
      </div>
    </Container>
  );
};

export default OwnerDetails;
