import React, { Fragment } from "react";
import {
    ModalBlock,
    ModalBody,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    FadeIn,
} from './styles'

interface ModalProps {
    active: boolean
    hideModal: () => void
    width: string
    title: string
    contentDisplay: string
    fadeInDisplay: string
    maxWidth: string

}

const Modal: React.FC<ModalProps> = ({
    active,
    hideModal,
    width,
    title,
    contentDisplay,
    fadeInDisplay,
    maxWidth,
    children,

}) => {
    return (
        <>
            {active && (
                <ModalBlock>
                    <ModalOverlay onClick={() => hideModal()} />
                    <FadeIn
                        display={fadeInDisplay}
                    >
                        <ModalContainer
                            maxWidth={maxWidth}
                            width={width}
                        >
                            <ModalHeader>
                                <ModalTitle>
                                    {title}
                                </ModalTitle>
                            </ModalHeader>
                            <ModalBody
                                contentDisplay={contentDisplay}
                            >
                                {children}
                            </ModalBody>
                        </ModalContainer>
                    </FadeIn>
                </ModalBlock>
            )}
        </>
    )
}
export default Modal;