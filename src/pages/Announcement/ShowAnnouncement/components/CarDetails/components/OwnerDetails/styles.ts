import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  height: 191px;

  border: 3px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 1rem;

  padding: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    width: 100%;
    height: 100%;
  }

  @media (max-width: 1440px) {
    width: 380px;
    height: 100%;
  }
`;
