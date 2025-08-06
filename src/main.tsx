import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import AuthProvider from './context/AuthProvider';
import './index.css';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <AuthProvider>  
       <App />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
