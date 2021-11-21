/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import wppIcon from '../../../../../../../../../assets/images/wpp-icon.svg';

import { Container } from './styles';

interface iWhatsAppButton {
  ownerPhone?: number;
}

const WppButton = ({ ownerPhone }: iWhatsAppButton) => {
  return (
    <Container
      onClick={() =>
        window.open(`https://api.whatsapp.com/send?phone=${ownerPhone}`)
      }
    >
      <img src={wppIcon} alt="" />
      WhatsApp
    </Container>
  );
};

export default WppButton;
