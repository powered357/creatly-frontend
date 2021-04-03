import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { ROUTES } from 'CONSTANTS/routes';

export const AdminRoute = ({ children: Component, ...rest }) => {
  const [cookies] = useCookies(['adminToken', 'adminRefresh']);
  const { adminToken, adminRefresh } = cookies;

  return (
    <Route
      {...rest}
      render={() => {
        if (adminToken && adminRefresh) {
          return Component;
        }

        return <Redirect to={ROUTES.ADMIN.LOGIN} />;
      }}
    />
  );
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
