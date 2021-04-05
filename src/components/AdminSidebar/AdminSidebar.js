import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { Link, Icon } from 'UI-KIT';

import { Sidebar, NavItem, NavIcon } from './styles/SidebarStyled';

export const AdminSidebar = ({ direction }) => {
  const { pathname } = useLocation();

  const navigation = [
    {
      title: 'Мои курсы',
      route: ROUTES.ADMIN.MY_COURSES,
      icon: 'school',
    },
    {
      title: 'Создать новый курс',
      route: ROUTES.ADMIN.CREATE_COURSE,
      icon: 'add_circle',
    },
  ];

  return (
    <Sidebar isHorizontal={direction === 'horizontal'}>
      {navigation.map(({ title, route, icon }, i) => (
        <NavItem key={i}>
          <NavIcon>
            <Icon name={icon} size={20} />
          </NavIcon>
          <Link to={route} isActive={route === pathname}>
            {title}
          </Link>
        </NavItem>
      ))}
    </Sidebar>
  );
};

AdminSidebar.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

AdminSidebar.defaultProps = {
  direction: 'vertical',
};
