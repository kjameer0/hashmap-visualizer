import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'tailwindcss/tailwind.css';
//components
import Arr from 'components/visualizers/Array';
import Hashmap from 'components/visualizers/Hashmap';
import { ErrorPage } from 'utils/error-handling';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'arr',
        element: <Arr />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'hashmap',
        element: <Hashmap />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<RouterProvider router={router} />);
}
