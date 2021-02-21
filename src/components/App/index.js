import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { logIn } from 'STORE/auth';

import RootRouter from 'PAGES/RootRouter';

const Title = styled.h1`
  font-size: 100px;
  font-family: 'Helvetica', 'sans-serif';
  color: palevioletred;
  margin: 0;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn());
  }, []);

  return (
    <>
      <Title>Courses Platform</Title>
      <RootRouter />
    </>
  );
};

export default App;
