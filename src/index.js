import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from  'react-router-dom';


import Unidades from './pages/Unidade/Unidades';
import Historia from './pages/Historia/Historia';
import Cardapio from './pages/Cardapio/Cardapio';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/unidades',
    element: <Unidades/>
  },
  {
    path:'/Historia',
    element: <Historia />
  },
  {
    path: '/Cardapio',
    element: <Cardapio/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();

