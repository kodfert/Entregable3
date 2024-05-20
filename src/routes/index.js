import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

//Students
import StudentsRoutes from './StudentsRoutes';
//profesores
import ProfesoresRoutes from './ProfesoresRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoutes, ProfesoresRoutes]);
}
