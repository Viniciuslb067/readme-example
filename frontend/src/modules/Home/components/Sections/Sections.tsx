import { CRMNotIntegrated, PhoneCall } from '..';

const Sections = () => {
  return (
    <div className="flex h-full space-x-3 p-4">
      <div className="size-full rounded-l-xl bg-white">
        <CRMNotIntegrated handleIntegrateCRM={() => {}} />
      </div>
      <div className="size-full bg-white"></div>
      <div className="size-full rounded-r-xl bg-white">
        <PhoneCall />
      </div>
    </div>
  );
};

export { Sections };
