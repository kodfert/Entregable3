import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const Profesores = Loadable(lazy(() => import('pages/profesores')));
const Create = Loadable(lazy(() => import('pages/profesores/create')));
const Edit = Loadable(lazy(() => import('pages/profesores/edit')));

// ==============================|| MAIN ROUTING ||============================== //

const ProfesoresRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'profesores', // ruta asignada en menu-items
      element: <Profesores />
    },
    {
      path: 'profesores/create',
      element: <Create />
    },
    {
      path: 'profesores/edit/:profesorId',
      element: <Edit />
    }
  ]
};

export default ProfesoresRoutes;
