import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'tailwindcss/tailwind.css';
//components
import Home from 'Home';
import Arr from 'components/visualizers/Array';
import Hashmap from 'components/visualizers/Hashmap';
import BinaryTree from 'components/visualizers/BinaryTree';
import { ErrorPage } from 'utils/error-handling';

import App from './App';
export const baseUrl = '/hashmap-visualizer/';
const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: baseUrl + '',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: baseUrl + 'arr',
        element: <Arr />,
        errorElement: <ErrorPage />,
      },
      {
        path: baseUrl + 'hashmap',
        element: <Hashmap />,
        errorElement: <ErrorPage />,
      },
      {
        path: baseUrl + 'binary-tree',
        element: <BinaryTree />,
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
