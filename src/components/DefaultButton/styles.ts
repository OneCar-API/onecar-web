import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5e9dbc;
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-radius: 25px;
  transition: background-color 0.2s;
  width: auto;
  height: 2.5rem;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#5E9DBC')};
  }
`;
