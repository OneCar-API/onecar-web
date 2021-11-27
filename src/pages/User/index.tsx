/* eslint-disable import/order */
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import SecondaryButton from '../../components/SecondaryButton';

import userIcon from '../../assets/images/user-profile.svg';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const User = () => {
  const { token } = useAuth();
  const [deleteUser, setDeleteUser] = useState(true);
  const history = useHistory();

  async function deletingUser() {
    await api.delete(`/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    history.push('/adverts');
  }

  return (
    <>
      <TopBar />
      <Container>
        <div className="user-profile">
          <img src={userIcon} alt="" />
          <h1>Henrique Sousa</h1>
          <p>@dehenriquesousa</p>

          {deleteUser ? (
            <SecondaryButton onClick={() => setDeleteUser(false)}>
              Deletar
            </SecondaryButton>
          ) : (
            <div className="delete-ask">
              <h1>
                Tem certeza? Isto irá deletar sua conta.
                <br />
                Essa ação não poderá ser desfeita.
              </h1>
              <div>
                <SecondaryButton
                  type="button"
                  onClick={() => setDeleteUser(true)}
                >
                  Cancelar
                </SecondaryButton>
                <SecondaryButton
                  id="set-delete"
                  type="button"
                  onClick={() => deletingUser()}
                >
                  Deletar
                </SecondaryButton>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default User;
