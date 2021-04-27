import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { getToken } from 'UTILS/getToken';
import { getRefreshToken } from 'UTILS/getRefreshToken';

export const PrivateRoute = ({ children: Component, ...rest }) => {
  const token = getToken();
  const refresh = getRefreshToken();
  const adminToken = getToken(true);
  const adminRefresh = getRefreshToken(true);

  return (
    <Route
      {...rest}
      render={() => {
        if ((token && refresh) || (adminToken && adminRefresh)) {
          return Component;
        }

        return <Redirect to={ROUTES.ACCOUNT.LOGIN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
