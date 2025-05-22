import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey="YOUR_CLERK_PUBLISHABLE_KEY">
    <App />
  </ClerkProvider>
);
