import axiosInstance from 'lib/axios';
import { GetMessageResponse } from './types';

const getChatMessages = (id: string): Promise<GetMessageResponse> => {
  return axiosInstance.get(`/chats/${id}`);
};

export { getChatMessages };
