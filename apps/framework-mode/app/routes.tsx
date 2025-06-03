import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default [
  layout('./pages/dashboard-layout.tsx', [
    index('./pages/dashboard-overview-page.tsx'),
    route('/settings', './pages/dashboard-settings-page.tsx'),
    ...prefix('/content', [
      route('/users', './pages/users-page.tsx'),
      route('/products', './pages/products-page.tsx'),
    ]),
  ]),
  ...prefix(
    'file-routes',
    await flatRoutes({
      rootDirectory: 'file-routes',
    })
  ),
] satisfies RouteConfig;
