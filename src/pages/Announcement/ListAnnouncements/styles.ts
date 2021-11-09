import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
