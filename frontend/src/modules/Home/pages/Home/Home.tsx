import Header from 'components/Header';
import { Sections } from 'modules/Home/components';

const Home = () => {
  return (
    <div className="flex h-full flex-col bg-gray-200">
      <Header />
      <Sections />
    </div>
  );
};

export default Home;
