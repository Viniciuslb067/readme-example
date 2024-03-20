import { CRMNotIntegrated, PhoneCall } from '..';

const Sections = () => {
  return (
    <div className="flex h-full grow space-x-3 p-4">
      <div className="h-[810px] w-full rounded-l-xl bg-white">
        <CRMNotIntegrated handleIntegrateCRM={() => {}} />
      </div>
      <div className="h-[810px] w-full bg-white"></div>
      <div className="h-[810px] w-full grow rounded-r-xl bg-white">
        <PhoneCall />
      </div>
    </div>
  );
};

export { Sections };
