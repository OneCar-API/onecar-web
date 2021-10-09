import React, { Fragment } from "react";
import {
    MenuContainer
} from './styles'

interface MenuProps {
    display: string
}

const Menu: React.FC<MenuProps> = ({
    display,
    children
}) => {
    return (
        <MenuContainer
            display={display}
        >
            {children}
        </MenuContainer>
    )
}
export default Menu;