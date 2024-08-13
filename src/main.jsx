import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react'
import React from 'react'
import { Dashboard } from './pages/Dashboard.jsx'
import { Header } from './components/Header.jsx'
import { Toaster } from "@/components/ui/sonner"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={((to) => navigate(to))}
    >
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/sign-in' element={<SignIn forceRedirectUrl='/dashboard' routing="path" path="/sign-in" />} />
        <Route path='/sign-up' element={<SignUp forceRedirectUrl='/dashboard' routing="path" path="/sign-up" />} />
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
      {/* <App /> */}
    </ClerkProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
      <Toaster richColors />
    </BrowserRouter>
  </React.StrictMode>
)
