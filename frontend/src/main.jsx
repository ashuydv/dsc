import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';

import App from './App';
import { Dashboard } from './pages/Dashboard';
import { DetailPage } from './pages/DetailedPage';
import { Header } from './components/Header';
import { Toaster } from "@/components/ui/sonner";

import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Header />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/projects/:id" element={<DetailPage />} />
        <Route path="/sign-in" element={<SignIn forceRedirectUrl="/dashboard" routing="path" path="/sign-in" />} />
        <Route path="/sign-up" element={<SignUp forceRedirectUrl="/dashboard" routing="path" path="/sign-up" />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
      <Toaster richColors />
    </ClerkProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
