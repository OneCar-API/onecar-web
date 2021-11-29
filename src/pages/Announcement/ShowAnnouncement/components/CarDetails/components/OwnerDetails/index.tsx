/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import Button from '../../../../../../../components/DefaultButton';
import WppButton from './components/WppButton';

import { Container } from './styles';

interface IOwner {
  ownerName?: string;
  ownerPhone?: number;
  user: any;
  announcementUser: any;
}

const OwnerDetails = ({
  ownerName,
  ownerPhone,
  user,
  announcementUser,
}: IOwner) => {
  return (
    <Container>
      <h2>{ownerName || 'Usuário sem Nome'}</h2>
      <p>{ownerPhone || 'Usuário sem telefone'}</p>
      <div>
        {ownerPhone && <WppButton ownerPhone={ownerPhone} />}
        <Button
          onClick={() =>
            window.open(
              `http://localhost:9000/chat?from_name=${user?.name}&from_id=${user?.id}to_id=${announcementUser?.id}&to_name=${announcementUser?.name}`,
            )
          }
        >
          Mensagem
        </Button>
      </div>
    </Container>
  );
};

export default OwnerDetails;
