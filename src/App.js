import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='pt-[32px] pl-[32px] pr-[32px] pb-[48px] font-IBMPlexSans'>
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
