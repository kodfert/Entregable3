// assets
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const students = {
  id: 'students',
  title: 'Students',
  type: 'group',
  children: [
    {
      id: 'students',
      title: 'Students', // titulo de como se vera en el menu
      type: 'item',
      url: '/students', // hacia donde se dirige el menu
      icon: icons.TeamOutlined, // icono
      breadcrumbs: false
    }
  ]
};

export default students;
