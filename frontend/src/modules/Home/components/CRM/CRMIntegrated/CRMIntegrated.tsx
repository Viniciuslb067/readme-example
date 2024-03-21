import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  IconCalendar,
  IconFile,
  IconHistory,
  IconId,
  IconLink,
  IconPhone,
  IconUserCircle
} from '@tabler/icons-react';
import { GetCustomerType } from 'services/Customer/types';

interface CRMIntegratedProps {
  user: GetCustomerType;
}

const CRMIntegrated = ({ user }: CRMIntegratedProps) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const {
    name,
    email,
    phone,
    website,
    cpf,
    role,
    companyCnpj,
    companyName,
    employees
  } = user;

  const items = [
    'Planos e Valores',
    'Contrato',
    'Reenviar Proposta',
    'Produtos Relacionados'
  ];

  const tabs = [
    { icon: <IconUserCircle size={24} />, title: 'Detalhes' },
    { icon: <IconFile size={24} />, title: 'Contrato' },
    { icon: <IconCalendar size={24} />, title: 'Anotações' },
    { icon: <IconHistory size={24} />, title: 'Histórico' }
  ];

  const renderRow = (icon: React.ReactNode, text: string) => (
    <div className="mb-3 flex items-center space-x-2">
      {icon}
      <p className="text-brand-secondary text-sm font-normal">{text}</p>
    </div>
  );

  const UserForm = ({
    label,
    value
  }: {
    label: string;
    value: string | number;
  }) => (
    <div>
      <div>
        <p className="text-xs font-normal text-gray-500">{label}</p>
        <p className="text-sm font-normal text-gray-500">{value}</p>
      </div>
    </div>
  );

  const renderTabs = () => (
    <div className="flex justify-center space-x-16">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="flex cursor-pointer flex-col items-center justify-center space-y-1 hover:opacity-85"
          onClick={() => setSelectedTab(index)}
        >
          {React.cloneElement(tab.icon, {
            color: selectedTab === index ? '#E73C5B' : '#515151'
          })}
          <p
            className={`text-xs ${
              selectedTab === index ? 'text-brand-primary' : 'text-gray-500'
            }`}
          >
            {tab.title}
          </p>
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex h-full flex-col space-y-4 px-3 py-4">
      <div className="h-[198px] w-full rounded-xl bg-gray-100">
        <div className="flex flex-col items-center justify-center border-b border-gray-300 p-4">
          <div className="flex size-[40px] items-center justify-center rounded-full">
            <img
              src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/lisa.png"
              alt="profile-image"
              className="size-[40px] rounded-full"
            />
          </div>
          <h2 className="text-brand-secondary text-sm font-medium">{name}</h2>
        </div>
        <div className="flex justify-center space-x-4 py-6 lg:mr-4">
          <div>
            {renderRow(<IconId size={16} color="#3D1152" />, cpf)}
            {renderRow(<IconPhone size={16} color="#3D1152" />, phone)}
          </div>
          <div>
            {renderRow(<IconId size={16} color="#3D1152" />, email)}
            {renderRow(<IconLink size={16} color="#3D1152" />, website)}
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex h-[74px] w-full items-center justify-center rounded-xl border border-gray-100"
          >
            <p className="text-brand-secondary text-center text-sm">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex grow flex-col rounded-xl border border-gray-100 px-6 pb-2 pt-3">
        {renderTabs()}
        <div className="flex flex-col space-y-4 pt-6">
          <div className="flex space-x-16">
            <UserForm label="CPF" value={cpf} />
            <UserForm label="Data de Nascimento" value="21/01/1999" />
          </div>
          <UserForm label="Cargo" value={role} />
          <UserForm label="Empresa" value={companyName} />
          <div className="flex space-x-8">
            <UserForm label="CNPJ" value={companyCnpj} />
            <UserForm label="Faturamento anual" value="R$ 67.459.026,00" />
          </div>
          <UserForm label="N. de funcionários" value={employees} />
          <UserForm label="Industria" value="Bens de consumo: automóveis" />
        </div>
      </div>
    </div>
  );
};

export { CRMIntegrated };
