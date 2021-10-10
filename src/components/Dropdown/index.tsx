import React, { Fragment } from "react";
import {
    DropdownBlock,
    DropdownBody,
    DropdownContainer,
    DropdownOverlay,
    FadeIn,
} from './styles'

interface DropdownProps {
    active: boolean
    hideMenu: () => void
    width: string
    contentDisplay: string
    fadeInDisplay: string
    maxWidth: string

}

const Dropdown: React.FC<DropdownProps> = ({
    active,
    hideMenu,
    width,
    contentDisplay,
    fadeInDisplay,
    maxWidth,
    children,

}) => {
    return (
        <>
            {active && (
                <DropdownBlock>
                    <DropdownOverlay onClick={() => hideMenu()} />
                    <FadeIn
                        display={fadeInDisplay}
                    >
                        <DropdownContainer
                            maxWidth={maxWidth}
                            width={width}
                        >
                            <DropdownBody
                                contentDisplay={contentDisplay}
                            >
                                {children}
                            </DropdownBody>
                        </DropdownContainer>
                    </FadeIn>
                </DropdownBlock>
            )}
        </>
    )
}
export default Dropdown;