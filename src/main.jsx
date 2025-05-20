import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Components/Header/Header.jsx';

import ProductListingPage from './Components/Pages/ProductListingPage.jsx';
import HomePage from './Components/Pages/HomePage.jsx'; // ✅ Importação adicionada

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/Produtos",
        element: <ProductListingPage />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
