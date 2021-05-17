import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { Loader } from 'UI-KIT';

import { PrivateRoute, AdminRoute } from 'COMPONENTS/Routes';
import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';
import { Header } from 'COMPONENTS/Header';
import { Footer } from 'COMPONENTS/Footer';
import { Main } from 'COMPONENTS/Main';
import { DocumentTitle } from 'COMPONENTS/DocumentTitle';

const Home = lazy(() => import(/* webpackChunkName: "home" */ 'PAGES/Home'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ 'PAGES/Auth/Login'));
const Registration = lazy(() => import(/* webpackChunkName: "registration" */ 'PAGES/Auth/Registration'));
const Verification = lazy(() => import(/* webpackChunkName: "verification" */ 'PAGES/Auth/Verification'));
const CourseInfo = lazy(() => import(/* webpackChunkName: "course-info" */ 'PAGES/CourseInfo'));
const Module = lazy(() => import(/* webpackChunkName: "module" */ 'PAGES/Module'));
const Lesson = lazy(() => import(/* webpackChunkName: "lesson" */ 'PAGES/Lesson'));
const AdminMyCourses = lazy(() => import(/* webpackChunkName: "admin-mycourses" */ 'PAGES/Admin/MyCourses'));
const AdminCourse = lazy(() => import(/* webpackChunkName: "admin-course" */ 'PAGES/Admin/Course'));
const AdminLesson = lazy(() => import(/* webpackChunkName: "admin-lesson" */ 'PAGES/Admin/Lesson'));
const Privacy = lazy(() => import(/* webpackChunkName: "privacy" */ 'PAGES/Privacy'));
const Refund = lazy(() => import(/* webpackChunkName: "refund" */ 'PAGES/Refund'));
const Service = lazy(() => import(/* webpackChunkName: "service" */ 'PAGES/Service'));

const RootRouter = () => {
  const { pathname } = useLocation();

  const withBars = !['/login', '/admin/login', '/registration', '/verification'].includes(pathname);
  const isAdmin = pathname.includes('/admin/');

  return (
    <Suspense fallback={<Loader fullHeight />}>
      <DocumentTitle />
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
          <Route exact path={ROUTES.COURSE.INFO}>
            <CourseInfo />
          </Route>
          <PrivateRoute exact path={ROUTES.MODULE}>
            <Module />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.COURSE.LESSON}>
            <Lesson />
          </PrivateRoute>
          <Route exact path={ROUTES.ACCOUNT.LOGIN}>
            <Login />
          </Route>
          <Route exact path={ROUTES.ACCOUNT.REGISTRATION}>
            <Registration />
          </Route>
          <Route exact path={ROUTES.ACCOUNT.VERIFICATION}>
            <Verification />
          </Route>
          <Route exact path={ROUTES.ADMIN.LOGIN}>
            <Login isAdmin />
          </Route>
          <AdminRoute exact path={ROUTES.ADMIN.MAIN}>
            <Redirect to={ROUTES.ADMIN.MY_COURSES} />
          </AdminRoute>
          <AdminRoute exact path={ROUTES.ADMIN.MY_COURSES}>
            <AdminMyCourses />
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
    </Suspense>
  );
};

export default RootRouter;
