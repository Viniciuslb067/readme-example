import CRMSection from '../CRM/CRMNotIntegrated/CRMNotIntegrated';

const Sections = () => {
  return (
    <div className="flex h-full space-x-3 p-4">
      <div className="size-full rounded-l-xl bg-white">
        <CRMSection handleIntegrateCRM={() => {}} />
      </div>
      <div className="size-full bg-white"></div>
      <div className="size-full rounded-r-xl bg-white"></div>
    </div>
  );
};

export { Sections };
