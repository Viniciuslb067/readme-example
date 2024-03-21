import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  IconCalendar,
  IconChevronDown,
  IconFile,
  IconHelpCircle,
  IconHistory,
  IconId,
  IconLink,
  IconPhone,
  IconUser,
  IconUserCircle
} from '@tabler/icons-react';

interface CRMNotIntegratedProps {
  handleIntegrateCRM: () => void;
}

const CRMNotIntegrated = ({ handleIntegrateCRM }: CRMNotIntegratedProps) => {
  const items = [
    { title: 'Planos e Valores' },
    { title: 'Contrato' },
    { title: 'Reenviar Proposta' },
    { title: 'Produtos Relacionados' }
  ];

  const items2 = [
    {
      icon: <IconUserCircle size={24} color="#AFAFAF" />,
      title: 'Detalhes'
    },
    {
      icon: <IconFile size={24} color="#AFAFAF" />,
      title: 'Contrato'
    },
    {
      icon: <IconCalendar size={24} color="#AFAFAF" />,
      title: 'Anotações'
    },
    {
      icon: <IconHistory size={24} color="#AFAFAF" />,
      title: 'Histórico'
    }
  ];

  const renderSkeletonRow = (iconComponent: React.ReactNode) => (
    <div className="mb-3 flex items-center space-x-2">
      {iconComponent}
      <Skeleton width={130} height={16} borderRadius={8} />
    </div>
  );

  return (
    <div className="flex h-full flex-col space-y-4 px-3 py-4">
      <div className="h-[198px] w-full rounded-xl bg-gray-100">
        <div className="flex flex-col items-center justify-center border-b border-gray-300 p-4">
          <div className="flex size-[40px] items-center justify-center rounded-full bg-gray-400">
            <IconUser size={24} color="#fff" />
          </div>
          <Skeleton width={284} height={20} className="mt-2" />
        </div>
        <div className="flex justify-center space-x-4 py-6 lg:mr-4">
          <div>
            {renderSkeletonRow(<IconId size={16} color="#AFAFAF" />)}
            {renderSkeletonRow(<IconPhone size={16} color="#AFAFAF" />)}
          </div>
          <div>
            {renderSkeletonRow(<IconId size={16} color="#AFAFAF" />)}
            {renderSkeletonRow(<IconLink size={16} color="#AFAFAF" />)}
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex h-[74px] w-full items-center justify-center rounded-xl border border-gray-100"
          >
            <p className="text-center text-sm text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex grow flex-col rounded-xl border border-gray-100 px-9 pb-2 pt-3">
        <div className="flex justify-center space-x-16">
          {items2.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-1"
            >
              {item.icon}
              <p className="text-xs text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-primary mt-24 flex flex-col items-center justify-between rounded-xl px-8 pb-4 pt-14">
          <div>
            <div className="lg:w-[317px]">
              <h1 className="text-center text-xl font-medium text-white">
                Chegou o momento de aproveitar ao máximo sua experiência
              </h1>
            </div>
            <p className="mt-2 text-center text-xs font-light text-white">
              Integração rápida e fácil.
            </p>
            <button
              onClick={handleIntegrateCRM}
              className="text-brand-primary mt-8 flex w-full items-center justify-center space-x-2 rounded-lg bg-white py-2 text-sm font-medium hover:opacity-85"
            >
              <IconLink size={16} color="#E73C5B" />
              <p>Integrar CRM</p>
              <IconChevronDown size={16} color="#E73C5B" />
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <IconHelpCircle size={16} color="#fff" />
            <h3 className="text-xs font-normal text-white">
              Caso precise de ajuda
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CRMNotIntegrated };
