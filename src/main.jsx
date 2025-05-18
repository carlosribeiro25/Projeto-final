import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Components/Pages/HomePage.jsx';
import ProductListing from './Components/ProductListing.jsx';
import ProductListingPage from './Components/Pages/ProductListingPage.jsx';


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
        path: "/ProductListingPage",
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
