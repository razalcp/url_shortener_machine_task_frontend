import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import '../index.css'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import DashboardPage from './components/DashboardPage'
import { Toaster } from 'sonner'
import ProtectedRoute from './components/protectedRoute'
import PublicRoute from './components/publicRoute'

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [{ path: "", element: <LandingPage /> }],
  },
  {
    path: "/login",
    element: <PublicRoute />,
    children: [{ path: "", element: <LoginPage /> }],
  },
  {
    path: "/register",
    element: <PublicRoute />,
    children: [{ path: "", element: <RegisterPage /> }],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <DashboardPage /> }],
  }
])

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
      <Toaster richColors />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)