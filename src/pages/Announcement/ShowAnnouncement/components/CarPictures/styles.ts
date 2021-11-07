import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  > img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 32px;
  }

  .gallery-and-upload {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;

    label {
      cursor: pointer;
      background: #5e9dbc;
      color: #fff;
      font-size: 18px;
      border: 0;
      border-radius: 25px;
      transition: background-color 0.2s;
      width: auto;
      height: 40px;

      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      input[type='file'] {
        appearance: none;
        display: none;
      }

      &:hover {
        transition: all 0.3s;
        transform: scale(1.03);
        background: ${shade(0.2, '#5E9DBC')};
      }
    }

    img {
      width: 95px;
      height: 95px;
      border-radius: 1rem;
      object-fit: cover;
      cursor: pointer;
      margin-left: 2rem;
    }

    img:hover {
      transition: all 0.3s ease-in-out;
      transform: scale(1.05);
    }
  }

  @media (max-width: 1440px) {
    padding: 0 2rem 2rem 2rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
