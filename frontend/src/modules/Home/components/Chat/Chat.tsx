import React, { useState } from 'react';
import { GetMessageType } from 'services/Chat/types';
import AvatarCallface from 'assets/images/avatar-callface.png';
import { IconSend2 } from '@tabler/icons-react';
import { getFirstName } from 'modules/Home/utils/getFirstName';
import useSendChatMessage from 'services/Chat/mutations/useSendChatMessage';
import toast from 'react-hot-toast';

interface ChatProps {
  messages: GetMessageType | null;
  refreshMessages: () => void;
}

const Chat = ({ messages, refreshMessages }: ChatProps) => {
  const { mutateAsync } = useSendChatMessage();

  const [showSuggestions, setShowSuggetions] = useState(true);
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageSend = async () => {
    try {
      if (!messages || !messages.id) {
        toast.error('Nenhuma conversa iniciada');
        return;
      }
      await mutateAsync({
        conversationId: messages.id,
        sender: 'SALESPERSON',
        content: inputMessage
      });
      setShowSuggetions(false);
      refreshMessages();
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message. Please try again later.');
    }
  };

  const handleOptionClick = (option: string) => {
    setInputMessage(option);
  };

  return (
    <div className="flex h-full flex-col bg-gray-100">
      <div className="flex grow flex-col justify-end p-4">
        {!messages?.messages && <CallfaceMessage notIngrated name="Homer" />}
        {messages?.messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            customer={messages.customer}
            salesperson={messages.salesperson}
          />
        ))}
        {messages?.messages && showSuggestions && (
          <>
            <div className="ml-auto flex items-center space-x-2">
              <div className="bg-brand-primary my-2 max-w-xs cursor-pointer rounded-lg p-2 text-white">
                <p>
                  Ofereça os produtos para{' '}
                  {getFirstName(messages?.customer.name)}
                </p>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="bg-brand-primary my-2 max-w-xs cursor-pointer rounded-lg p-2 text-white">
                <p onClick={() => handleOptionClick('Produto 1')}>Produto 1</p>
              </div>
              <div className="bg-brand-primary my-2 max-w-xs cursor-pointer rounded-lg p-2 text-white">
                <p onClick={() => handleOptionClick('Produto 2')}>Produto 2</p>
              </div>
              <div className="bg-brand-primary my-2 max-w-xs cursor-pointer rounded-lg p-2 text-white">
                <p onClick={() => handleOptionClick('Produto 3')}>Produto 3</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex space-x-5 border-t border-gray-200 bg-white p-4">
        <input
          type="text"
          placeholder="Escrever mensagem..."
          className="grow rounded-l-lg border px-5 py-2"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="hover:opacity-85"
          onClick={handleMessageSend}
          disabled={!inputMessage}
        >
          <IconSend2 color="#6B7280" size={24} />
        </button>
      </div>
    </div>
  );
};

const CallfaceMessage = ({ notIngrated, name }: any) => {
  return (
    <div className="ml-auto flex items-center space-x-2">
      <div className="bg-brand-primary my-2 max-w-xs cursor-pointer rounded-lg p-2 text-white">
        <p>{notIngrated && `Oi ${name}, como posso te ajudar hoje?`}</p>
      </div>
      <img
        src={AvatarCallface}
        alt="sales-photo"
        className="size-[33px] rounded-full"
      />
    </div>
  );
};

const Message = ({ message, customer, salesperson }: any) => {
  const messageClass = message.sender === 'SALESPERSON' ? 'ml-auto' : 'mr-auto';
  const senderClass =
    message.sender === 'SALESPERSON'
      ? 'bg-brand-primary text-white'
      : 'bg-gray-200 text-gray-700';

  return (
    <>
      <div className={`flex items-center space-x-2 ${messageClass}`}>
        {message.sender !== 'SALESPERSON' && (
          <img
            src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/lisa.png"
            alt="sales-photo"
            className="size-[33px] rounded-full"
          />
        )}
        <p className="text-sm text-gray-900">
          {message.sender === 'SALESPERSON'
            ? getFirstName(salesperson.name)
            : getFirstName(customer.name)}
        </p>
        {message.sender === 'SALESPERSON' && (
          <img
            src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/homer.png"
            alt="sales-photo"
            className="size-[33px] rounded-full"
          />
        )}
      </div>
      <div
        className={`my-2 max-w-xs rounded-lg p-2 ${messageClass} ${senderClass}`}
      >
        <p>{message.content}</p>
      </div>
    </>
  );
};

export { Chat };
