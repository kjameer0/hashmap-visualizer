import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'tailwindcss/tailwind.css';
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
        element: React.createElement(
          'div',
          null,
          '/Users/khalidjameer/finalProjectProgression/array-visualizer/index.html'
        ),
      },
    ],
  },
]);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
