import React, { useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import SecondaryButton from '../../../../../../../components/SecondaryButton';
import api from '../../../../../../../services/api';
import { useAuth } from '../../../../../../../hooks/auth';

import { Container } from './styles';

interface iDisplayAd {
  picture: string;
  model: string;
  year: string;
  brand: string;
  description: string;
}

const DisplayAd = ({
  picture,
  model,
  year,
  brand,
  description,
}: iDisplayAd) => {
  const [deleting, setDeleting] = useState(false);
  const location = useLocation();
  const idString = location.pathname.slice(8, location.pathname.length);
  const { token } = useAuth();
  const history = useHistory();

  async function deleteAd() {
    await api.delete(`/ads/${idString}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    history.push('/adverts');
  }

  return (
    <Container>
      <h1>Edição do anúncio</h1>

      <img src={picture} alt="carro" />

      <div className="title">
        <h1 id="brand">{brand}</h1>
        <h1 id="model">{model}</h1>
      </div>
      <h2>{year}</h2>

      {!deleting && (
        <SecondaryButton
          className="delete"
          type="button"
          onClick={() => setDeleting(true)}
        >
          Deletar
        </SecondaryButton>
      )}

      {deleting && (
        <div className="delete-ask">
          <h1>Tem Certeza? Essa ação não poderá ser desfeita. </h1>
          <div>
            <SecondaryButton type="button" onClick={() => setDeleting(false)}>
              Cancelar
            </SecondaryButton>
            <SecondaryButton
              id="set-delete"
              type="button"
              onClick={() => deleteAd()}
            >
              Deletar
            </SecondaryButton>
          </div>
        </div>
      )}

      <div>
        <h3>Descrição do Veículo</h3>

        <p>
          {description ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        </p>
      </div>
    </Container>
  );
};

export default DisplayAd;
