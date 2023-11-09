import React, {Suspense} from 'react';
import './App.css';

import {Navigate, useRoutes} from "react-router-dom";

import {protectedRoutes} from "./shared/helpers/routes/routes.tx";
import {MainLayout} from "./pages/MainLayout";
import {LoginPage} from "./pages/Login/ui/LoginPage";

const createRoutes = () => [
  {
    path: '/',
    element: (sessionStorage.getItem("token") || localStorage.getItem("token")) ? <MainLayout /> : <Navigate to="/login" />,
    children: protectedRoutes,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
];

function App() {
  const customRouter = useRoutes(createRoutes());
  return (
      <div className="App">
        <Suspense>{customRouter}</Suspense>
      </div>
  );
}

export default App;
