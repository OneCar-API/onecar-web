import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;

  body {
    background: #ffffff;
  }
`;

export const Header = styled.header`
  padding: 1rem;
  width: 100%;
  background: #e5e5e5;
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-and-search {
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      transition: all 0.3s;
      transform: scale(1.03);
      opacity: 70%;
    }

    img {
      width: 8rem;
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
  }
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  margin-left: 1rem;

  input {
    flex: 1;
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 25px 0 0 25px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    margin-left: auto;
    background: #fff;
    border: 0;
    border-radius: 0 25px 25px 0;
    transition: background-color 0.2s;
    width: 50px;
    height: 30px;

    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }

    svg {
      color: var(--blue);
      width: 16px;
      height: 16px;
      margin-top: 5px;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Profile = styled.button`
  appearance: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  gap: 0.5rem;

  p {
    color: #5e9dbc;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
