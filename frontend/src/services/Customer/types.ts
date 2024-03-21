export interface GetCustomerType {
  id: string;
  name: string;
  email: string;
  cpf: string;
  website: string;
  phone: string;
  role: string;
  companyName: string;
  companyCnpj: string;
  employees: number;
}

export interface GetCustomerResponse {
  status: string;
  message: string;
  data: GetCustomerType;
}
