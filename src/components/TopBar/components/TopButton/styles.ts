import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5e9dbc;
  color: #fff;
  font-size: 16px;
  border: 0;
  border-radius: 25px;
  transition: background-color 0.2s;
  width: 7.6rem;
  height: 2.5rem;

  &:hover {
    background: ${shade(0.2, '#5E9DBC')};
  }
`;
