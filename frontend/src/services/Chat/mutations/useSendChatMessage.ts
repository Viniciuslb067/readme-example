import { useMutation } from 'react-query';
import { sendMessage } from '../api';

const useSendChatMessage = () => {
  return useMutation(sendMessage);
};

export default useSendChatMessage;
