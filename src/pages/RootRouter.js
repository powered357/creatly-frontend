import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { HomePage } from 'PAGES/Home';
import Login from 'PAGES/Auth/Login';
import Registration from 'PAGES/Auth/Registration';
import Verification from 'PAGES/Auth/Verification';

import { PrivateRoute } from 'COMPONENTS/Routes';
import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';
import { Header } from 'COMPONENTS/Header';
import { Footer } from 'COMPONENTS/Footer';
import { Main } from 'COMPONENTS/Main';

const RootRouter = () => {
  const { pathname } = useLocation();

  const withBars = !['/login', '/admin/login', '/registration', '/verification'].includes(pathname);

  return (
    <>
      {withBars && <Header />}
      <Main>
        <Switch>
          <PrivateRoute exact path={ROUTES.ROOT}>
            <HomePage />
          </PrivateRoute>
          <Route exact path={ROUTES.ACCOUNT.LOGIN}>
            <Login />
          </Route>
          <Route exact path={ROUTES.ADMIN.LOGIN}>
            <Login isAdmin />
          </Route>
          <Route exact path={ROUTES.ACCOUNT.REGISTRATION}>
            <Registration />
          </Route>
          <Route exact path={ROUTES.ACCOUNT.VERIFICATION}>
            <Verification />
          </Route>
          <Route exact path={ROUTES.ERROR.NOT_FOUND}>
            <ErrorWrapper text="404 Page not found" />
          </Route>
          <Route path="*">
            <Redirect to={ROUTES.ERROR.NOT_FOUND} />
          </Route>
        </Switch>
      </Main>
      {withBars && <Footer />}
    </>
  );
};

export default RootRouter;
