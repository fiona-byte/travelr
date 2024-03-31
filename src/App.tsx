import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from './pages/LandingPage';
import CountryDetails from './pages/CountryDetails/CountryDetails';

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/country/:country_name' element={<CountryDetails />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
