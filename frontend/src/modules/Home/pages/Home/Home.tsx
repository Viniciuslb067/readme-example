import Header from 'components/Header';
import { Section } from 'modules/Home/components';

const Home = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-200">
      <Header />
      <Section />
    </div>
  );
};

export default Home;
