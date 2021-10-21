import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5e9dbc;
  border-radius: 1.5rem;
  border: 0;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
  transition: background-color 0.2s;
  height: 3rem;

  &:hover {
    background: ${shade(0.2, '#5E9DBC')};
    cursor: pointer;
    transition: all 0.6s;
    transform: scale(1.05);
  }
`;
