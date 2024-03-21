import { useMutation, useQueryClient } from 'react-query';
import { getCustomer as getCostumerApi } from '../api';

const useGetCustomer = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries('customer');
  };

  const mutation = useMutation(getCostumerApi, {
    onSuccess
  });

  const getCustomer = async (id: string) => {
    return mutation.mutateAsync(id);
  };

  return { getCustomer, ...mutation };
};

export default useGetCustomer;
