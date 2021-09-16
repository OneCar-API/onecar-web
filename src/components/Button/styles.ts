import styled from "styled-components";
import{shade} from 'polished';


export const Container = styled.button`

background: #5E9DBC;
height: 63px;
border-radius: 5px;
border: 0;
padding: 0 16px;
color: #FFFFFF;
width: 273px;
font-weight: bold;
font-size: 36px;
margin-top: 16px;
transition: background-color 0.2s;


&:hover{
  background: ${shade(0.2, '#5E9DBC')};
  
}`;

