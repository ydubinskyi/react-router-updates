import { createBrowserRouter, RouterProvider } from 'react-router';

import { DashboardLayout } from '@react-router-updates/ui/components/dashboard-layout';

import { DashboardOverviewPage } from './pages/dashboard-overview-page';
import { DashboardSettingsPage } from './pages/dashboard-settings-page';
import { UsersPage, loader as usersLoader } from './pages/users-page';
import { ProductsPage, loader as productsLoader } from './pages/products-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout title="RR Data mode" />,
    children: [
      { index: true, Component: DashboardOverviewPage },
      {
        path: '/settings',
        Component: DashboardSettingsPage,
      },
      {
        path: '/content',
        children: [
          {
            path: 'users',
            loader: usersLoader,
            Component: UsersPage,
          },
          {
            path: 'products',
            loader: productsLoader,
            Component: ProductsPage,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
