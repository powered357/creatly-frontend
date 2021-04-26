import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import Module from 'PAGES/Module';
import Course from 'PAGES/Course';
import Home from 'PAGES/Home';
import Privacy from 'PAGES/Privacy';
import Refund from 'PAGES/Refund';
import Service from 'PAGES/Service';
import Login from 'PAGES/Auth/Login';
import Registration from 'PAGES/Auth/Registration';
import Verification from 'PAGES/Auth/Verification';
import MyCourses from 'PAGES/Admin/MyCourses';
import AdminCourse from 'PAGES/Admin/Course';
import AdminLesson from 'PAGES/Admin/Lesson';

import { PrivateRoute, AdminRoute } from 'COMPONENTS/Routes';
import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';
import { Header } from 'COMPONENTS/Header';
import { Footer } from 'COMPONENTS/Footer';
import { Main } from 'COMPONENTS/Main';

const RootRouter = () => {
  const { pathname } = useLocation();

  const withBars = !['/login', '/admin/login', '/registration', '/verification'].includes(pathname);
  const isAdmin = pathname.includes('/admin/');

  return (
    <>
      {withBars && <Header isAdmin={isAdmin} />}
      <Main>
        <Switch>
          <Route exact path={ROUTES.ROOT}>
            <Home />
          </Route>
          <PrivateRoute exact path={ROUTES.PRIVACY}>
            <Privacy />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.REFUND}>
            <Refund />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.SERVICE}>
            <Service />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.COURSE}>
            <Course />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.MODULE}>
            <Module />
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
          <AdminRoute exact path={ROUTES.ADMIN.MY_COURSES}>
            <MyCourses />
          </AdminRoute>
          <AdminRoute exact path={ROUTES.ADMIN.COURSE.MAIN}>
            <AdminCourse />
          </AdminRoute>
          <AdminRoute exact path={ROUTES.ADMIN.COURSE.LESSON}>
            <AdminLesson />
          </AdminRoute>
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
