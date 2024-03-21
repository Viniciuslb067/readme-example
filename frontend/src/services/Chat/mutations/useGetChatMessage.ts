import { useMutation, useQueryClient } from 'react-query';
import { getChatMessages as getMessageApi } from '../api';

const useGetChatMessages = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries('chat');
  };

  const mutation = useMutation(getMessageApi, {
    onSuccess
  });

  const getChatMessages = async (id: string) => {
    return mutation.mutateAsync(id);
  };

  return { getChatMessages, ...mutation };
};

export default useGetChatMessages;
