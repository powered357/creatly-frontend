import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from 'STORE/courses';

import { Loader } from 'UI-KIT';

import { CourseCard } from 'COMPONENTS/CourseCard';
import { Container } from 'COMPONENTS/Container';

import { Content, HomeStyled, Title } from './styles/HomeStyled';

export const Home = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector(({ courses }) => courses.all);
  const isLoading = useSelector(({ courses }) => courses.isLoading);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [fetchCourses]);

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
