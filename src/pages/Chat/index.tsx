import React, { useState } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../../components/DefaultButton';



import {
    Container,
    Header,
    HeaderContent,
    Content,
    MessageContainer,
    Input,
} from './styles'

interface ChatIdentifiers {
    client: any
    id: string;
    from_id: string;
    to_id: string;
    ad: {
        id: string;
        manufacturer: string;
        brand: string;
        model: string;
        year_manufacture: string;
        year_model: string;
        fuel: string;
        gearbox_type: string;
        km: string;
        color: string;
        carImages: [
            {
                id: string,
                image: string,
                car_id: string,
                image_url: string,
            }
        ];
    };
}

interface SentMsg {
    text: string;
    recipient_id: string;
    advertiser_id: string;
}

interface PastMsgs {
    text: string;
    recipient_id: string;
    advertiser_id: string;
    created_at: string;
    updated_at: string;
    id: string;
}

const Chat: React.FC = () => {

    const [messages, setMessages] = useState<PastMsgs[]>([])
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const { state } = useLocation<ChatIdentifiers>();
    const history = useHistory()


    function closeChat() {
        // disconnect socket
        history.goBack()
    }

    function handleSendMessage(msg: string) {
        console.log(msg)
    }



    return (
        <Container>
            <Header>
                <HeaderContent>
                    <FiArrowLeft size={25} onClick={() => closeChat()} />
                </HeaderContent>
            </Header>

            <Content>
                {messages.map(message => (
                    message.recipient_id === '1' ?
                        <div className='sent-msg'>
                            <h6>{message.created_at}</h6>
                            <b>{message.text}</b>
                        </div>
                        :
                        <div className='recieved-msg'>
                            <h6>{message.created_at}</h6>
                            <b>{message.text}</b>
                        </div>
                ))}
            </Content>
            <MessageContainer>
                <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder='Digite sua mensagem...'
                    
                />
                <Button onClick={() => handleSendMessage(currentMessage)}>Enviar</Button>
            </MessageContainer>
        </Container>
    )
}
export default Chat;