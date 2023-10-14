import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const MainRoutes = {
  path: '/app',
  element: <MainLayout />,
  children: [
    {
      path: '/app',
      element: <DashboardDefault />,
    },
    {
      path: 'app/dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />,
        },
      ],
    },
  ],
};

export default MainRoutes;
