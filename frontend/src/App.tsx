import Home from 'modules/Home/pages/Home/Home';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'lib/react-query';
import { Toaster } from 'components/Toaster/Toaster';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
