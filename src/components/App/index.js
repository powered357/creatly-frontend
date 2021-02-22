import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { logIn } from 'STORE/auth';

import RootRouter from 'PAGES/RootRouter';

import { AppStyled } from './styles/AppStyled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn());
  }, []);

  return (
    <AppStyled>
      <Router>
        <RootRouter />
      </Router>
    </AppStyled>
  );
};
