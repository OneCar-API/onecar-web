import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
