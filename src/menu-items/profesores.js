// assets
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const profesores = {
  id: 'profesores',
  title: 'Profesores',
  type: 'group',
  children: [
    {
      id: 'profesores',
      title: 'Profesores', // titulo de como se vera en el menu
      type: 'item',
      url: '/profesores', // hacia donde se dirige el menu
      icon: icons.TeamOutlined, // icono
      breadcrumbs: false
    }
  ]
};

export default profesores;
