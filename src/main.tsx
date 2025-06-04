import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import AuthProvider from './context/AuthProvider';
import './index.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <AuthProvider>  
       <App />
    </AuthProvider>
  </StrictMode>,
)
