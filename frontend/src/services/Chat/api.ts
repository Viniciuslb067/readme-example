import axiosInstance from 'lib/axios';
import { GetMessageResponse } from './types';

const getChatMessages = (id: string): Promise<GetMessageResponse> => {
  return axiosInstance.get(`/chats/${id}`);
};

const sendMessage = (body: {
  conversationId: string;
  content: string;
  sender: 'SALESPERSON' | 'CUSTOMER';
}) => {
  return axiosInstance.post(`/chats/${body.conversationId}/messages`, body);
};

export { getChatMessages, sendMessage };
