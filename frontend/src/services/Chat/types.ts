export interface Messages {
  id: number;
  content: string;
  sender: string;
  conversationId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetMessageType {
  identifier: string;
  customerId: number;
  salespersonId: number;
  createdAt: string;
  updatedAt: string;
  customer: {
    id: number;
    name: string;
    email: string;
    cpf: string;
    website: string;
    phone: string;
    role: string;
    companyName: string;
    companyCnpj: string;
    employees: number;
    createdAt: string;
    updatedAt: string;
  };
  salesperson: {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    createdAt: string;
    updatedAt: string;
  };
  messages: Messages[];
}

export interface GetMessageResponse {
  status: string;
  message: string;
  data: GetMessageType;
}
