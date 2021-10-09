import styled, { keyframes } from 'styled-components';

interface MenuContainerProps {
    display: string
}

export const MenuContainer = styled.div<MenuContainerProps>`
    display: ${(props) => props.display};
    grid-template-columns: "ad ad ad";
    cursor:pointer;
    width: 100%;
    flex-wrap: wrap;
    text-decoration: none;

    

`;
