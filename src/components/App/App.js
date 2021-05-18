import { Router } from 'react-router-dom';
import { useEffect } from 'react';

import RootRouter from 'PAGES/RootRouter';

import { Notifications } from 'COMPONENTS/Notifications';

import history from 'UTILS/history';
import { analytics } from 'UTILS/analytics';

import { AppStyled } from './styles/AppStyled';

// PROD CODE: UA-179511990-1
analytics.init('UA-197317218-1', {
  debug: true,
  titleCase: false,
});

export const App = () => {
  useEffect(() => {
    analytics.pageView(window.location.pathname);

    history.listen((location) => {
      analytics.pageView(location.pathname);
    });
  }, []);

  return (
    <AppStyled>
      <Router history={history}>
        <RootRouter />
        <Notifications />
      </Router>
    </AppStyled>
  );
};
