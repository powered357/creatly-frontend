import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { apiGetAllCourses } from 'API/home';

import { fetchCourses } from 'STORE/home';

import { Content, HomeStyled, PageTitle } from 'PAGES/Home/styles/HomeStyled';

import { Container } from 'COMPONENTS/Container';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <Container size="sm">
      <HomeStyled>
        <PageTitle>Курсы</PageTitle>
        <Content>
          <div>ars</div>
          <div>ars</div>
          <div>ars</div>
          <div>ars</div>
        </Content>
      </HomeStyled>
    </Container>
  );
};
