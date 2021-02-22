import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';
import { Loader } from 'COMPONENTS/Loader';
import { Header } from 'COMPONENTS/Header';
import { Footer } from 'COMPONENTS/Footer';
import { Main } from 'COMPONENTS/Main';

const Login = lazy(() => import('PAGES/Login'));

const RootRouter = () => {
  const { pathname } = useLocation();

  const withBars = !['/login'].includes(pathname);

  return (
    <>
      {withBars && <Header />}
      <Main>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={ROUTES.MAIN}>
              Main page
            </Route>
            <Route exact path={ROUTES.LOGIN}>
              <Login />
            </Route>
            <Route exact path={ROUTES.ERROR.NOT_FOUND}>
              <ErrorWrapper text="404 Page not found" />
            </Route>
            <Route path="*">
              <Redirect to={ROUTES.ERROR.NOT_FOUND} />
            </Route>
          </Switch>
        </Suspense>
      </Main>
      {withBars && <Footer />}
    </>
  );
};

export default RootRouter;
