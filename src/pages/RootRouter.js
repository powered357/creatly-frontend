import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';
import { Loader } from 'COMPONENTS/Loader';
import { Header } from 'COMPONENTS/Header';
import { Footer } from 'COMPONENTS/Footer';

const Login = lazy(() => import('PAGES/Login'));

const RootRouter = () => (
  <Router>
    <Header />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          Main page
        </Route>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.ERROR.NOT_FOUND}>
          <ErrorWrapper text="Page not found" />
        </Route>
        <Route path="*">
          <Redirect to={ROUTES.ERROR.NOT_FOUND} />
        </Route>
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);

export default RootRouter;
