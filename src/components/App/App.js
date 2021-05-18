import { Router } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

import RootRouter from 'PAGES/RootRouter';

import { Notifications } from 'COMPONENTS/Notifications';

import history from 'UTILS/history';

import { AppStyled } from './styles/AppStyled';

// PROD CODE: UA-179511990-1
ReactGA.initialize('UA-197317218-1', {
  debug: true,
  titleCase: false,
});

export const App = () => {
  useEffect(() => {
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
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
