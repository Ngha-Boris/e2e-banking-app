
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PaymentOptions from './Components/index.tsx'
import ErrorPage from "./Components/error-page";
import Confirmation from "./Components/confirmation.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import UserInfo from './Components/userinfo.tsx';
const router = createBrowserRouter([
  {
      path: "/",
      element: <PaymentOptions/>,
      errorElement: <ErrorPage />,
  },

  {
    path: "/userinfo",
    element: <UserInfo />,
  },
  {
    path: "/userinfo/:confirmation",
    element: <Confirmation />,
  },

 

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
<Outlet />
  </React.StrictMode>,
)