import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/LandingPage';
import CountryDetails from './pages/CountryDetails/CountryDetails';
import '@fontsource/junge';
import '@fontsource/happy-monkey';

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/country/:country_name' element={<CountryDetails />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
