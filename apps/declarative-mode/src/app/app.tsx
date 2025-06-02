import { Navigate, Route, Routes } from 'react-router';

import { DashboardLayout } from '@react-router-updates/ui/components/dashboard-layout';

import { DashboardOverviewPage } from './pages/dashboard-overview-page';
import { DashboardSettingsPage } from './pages/dashboard-settings-page';
import { UsersPage } from './pages/users-page';
import { ProductsPage } from './pages/products-page';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout title="RR Declarative mode" />}>
        <Route index element={<DashboardOverviewPage />} />
        <Route path="/settings" element={<DashboardSettingsPage />} />

        <Route path="/content">
          <Route index element={<Navigate to="/content/users" replace />} />

          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<ProductsPage />} />

          <Route path="*" element={<Navigate to="/content/users" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
