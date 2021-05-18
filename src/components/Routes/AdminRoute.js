import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { getToken, getRefreshToken } from 'UTILS/manageTokens';

export const AdminRoute = ({ children: Component, ...rest }) => {
  const adminToken = getToken(true);
  const adminRefresh = getRefreshToken(true);

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
