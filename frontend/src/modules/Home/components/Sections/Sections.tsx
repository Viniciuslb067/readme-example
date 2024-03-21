import { useState } from 'react';
import toast from 'react-hot-toast';
import { GetCustomerType } from 'services/Customer/types';
import { GetMessageType } from 'services/Chat/types';
import useGetCustomer from 'services/Customer/mutations/useGetCustomer';
import useGetChatMessages from 'services/Chat/mutations/useGetChatMessage';

import { CRMIntegrated, CRMNotIntegrated, PhoneCall, Chat } from '..';

const Sections = () => {
  const { getCustomer } = useGetCustomer();
  const { getChatMessages } = useGetChatMessages();
  const [userData, setData] = useState<GetCustomerType | null>(null);
  const [userMessages, setUserMessages] = useState<GetMessageType | null>(null);

  const handleIntegrateCRM = async () => {
    try {
      const { data } = await getCustomer('1');
      setData(data);
      const { data: chatMessageData } = await getChatMessages('1');
      setUserMessages(chatMessageData);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex h-full grow space-x-3 p-4">
      <div className="h-[810px] w-full rounded-l-xl bg-white">
        {!userData ? (
          <CRMNotIntegrated handleIntegrateCRM={handleIntegrateCRM} />
        ) : (
          <CRMIntegrated user={userData} />
        )}
      </div>
      <div className="h-[810px] w-full bg-white">
        <Chat messages={userMessages} />
      </div>
      <div className="h-[810px] w-full grow rounded-r-xl bg-white">
        <PhoneCall />
      </div>
    </div>
  );
};

export { Sections };
