import styled from 'styled-components';

export const Container = styled.div`
  .ads {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 2rem;
    flex-wrap: wrap;

    a:-webkit-any-link {
      color: transparent;
    }
  }

  @media (max-width: 768px) {
    .ads {
      justify-content: center;
    }
  }
`;
