import { Router } from 'react-router-dom';

import RootRouter from 'PAGES/RootRouter';

import { Notifications } from 'COMPONENTS/Notifications';

import history from 'UTILS/history';

import { AppStyled } from './styles/AppStyled';

export const App = () => (
  <AppStyled>
    <Router history={history}>
      <RootRouter />
      <Notifications />
    </Router>
  </AppStyled>
);
