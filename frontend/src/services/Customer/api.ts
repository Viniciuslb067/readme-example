import axiosInstance from 'lib/axios';
import { GetCustomerResponse } from './types';

const getCustomer = (id: string): Promise<GetCustomerResponse> => {
  return axiosInstance.get(`/customers/${id}`);
};

export { getCustomer };
