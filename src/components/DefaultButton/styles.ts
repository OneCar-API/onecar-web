import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5e9dbc;
  color: #fff;
  font-size: 18px;
  border: 0;
  border-radius: 25px;
  transition: background-color 0.2s;
  width: 122.55px;
  height: 40px;

  background: #5e9dbc;
  border-radius: 25px;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  align-items: center;
  text-align: center;

  &:hover {
    background: ${shade(0.2, '#5E9DBC')};
  }
`;
