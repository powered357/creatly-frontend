import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { ROUTES } from 'CONSTANTS/routes';

export const PrivateRoute = ({ children: Component, ...rest }) => {
  const [cookies] = useCookies(['token', 'refresh']);
  const { token, refresh } = cookies;

  return (
    <Route
      {...rest}
      render={() => {
        if (!token && !refresh) {
          return <Redirect to={ROUTES.ACCOUNT.LOGIN} />;
        }

        return Component;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
