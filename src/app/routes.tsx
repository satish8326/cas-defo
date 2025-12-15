import React from 'react';
import { useRoutes } from 'react-router-dom';
import authRoutes from '../features/auth/auth.routes';
import Dashboard from '../features/dashboard/Dashboard';
import Products from '../features/dashboard/Products';
import OrdersPage from '../features/orders/OrdersPage';
import TemplatesPage from '../features/dashboard/TemplatesPage';
import InvoicesPage from '../features/dashboard/InvoicesPage';
import SettingsPage from '../features/dashboard/SettingsPage';
import DashboardLayout from '../components/layout/DashboardLayout';
import ROUTES from '../constants/routes';

const AppRoutes: React.FC = () => {
  const element = useRoutes([
    ...authRoutes,
    {
      path: ROUTES.dashboard,
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      ),
    },
    {
      path: ROUTES.products,
      element: (
        <DashboardLayout>
          <Products />
        </DashboardLayout>
      ),
    },
    {
      path: ROUTES.orders,
      element: (
        <DashboardLayout>
          <OrdersPage />
        </DashboardLayout>
      ),
    },
    {
      path: ROUTES.templates,
      element: (
        <DashboardLayout>
          <TemplatesPage />
        </DashboardLayout>
      ),
    },
    {
      path: ROUTES.invoices,
      element: (
        <DashboardLayout>
          <InvoicesPage />
        </DashboardLayout>
      ),
    },
    {
      path: ROUTES.settings,
      element: (
        <DashboardLayout>
          <SettingsPage />
        </DashboardLayout>
      ),
    },
  ]);
  return element;
};

export default AppRoutes;

