import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import { logIn } from 'STORE/auth';

import RootRouter from 'PAGES/RootRouter';

import { Notifications } from 'COMPONENTS/Notifications';

import history from 'UTILS/history';

import { AppStyled } from './styles/AppStyled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn());
  }, []);

  return (
    <CookiesProvider>
      <AppStyled>
        <Router history={history}>
          <RootRouter />
          <Notifications />
        </Router>
      </AppStyled>
    </CookiesProvider>
  );
};
