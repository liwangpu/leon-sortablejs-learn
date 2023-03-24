import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.scss';
import App from './components/App';

const Home = React.lazy(() => import('./pages/Home'));
const DragEvent = React.lazy(() => import('./pages/DragEvent'));
const SortableDragEvent = React.lazy(() => import('./pages/SortableDragEvent'));


function WrapperSuspense(WrappedComponent: React.ComponentType) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: 'home',
        element: WrapperSuspense(Home)
      },
      {
        path: 'drag-event',
        element: WrapperSuspense(DragEvent)
      },
      {
        path: 'sortable-drag-event',
        element: WrapperSuspense(SortableDragEvent)
      },
      {
        index: true,
        element: <Navigate to="home" replace={true} />,
      }
    ]
  },
  {
    index: true,
    element: <Navigate to="/app" replace={true} />,
  },
  {
    path: '*',
    element: <Navigate to="/app" replace={true} />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
