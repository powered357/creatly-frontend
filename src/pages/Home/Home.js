import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { fetchCourses } from 'STORE/courses';
import { setErrorMsg } from 'STORE/notifications';

import { Loader } from 'UI-KIT';

import { CourseCard } from 'COMPONENTS/CourseCard';
import { Container } from 'COMPONENTS/Container';

import { Content, HomeStyled, Title } from './styles/HomeStyled';

export const Home = () => {
  const dispatch = useDispatch();
  const { all: allCourses, isLoading } = useSelector(({ courses }) => courses);

  useEffect(() => {
    dispatch(fetchCourses())
      .then(unwrapResult)
      .catch((error) => {
        dispatch(setErrorMsg(error));
      });
  }, []);

  return (
    <Container size="sm">
      <HomeStyled>
        <Title>Курсы</Title>
        <Content>
          {!isLoading ? allCourses.map((course) => <CourseCard key={course.id} {...course} />) : <Loader size={50} />}
        </Content>
      </HomeStyled>
    </Container>
  );
};
