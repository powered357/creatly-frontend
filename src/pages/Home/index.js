import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from 'STORE/courses';

import { Loader } from 'UI-KIT';

import { CourseCard } from 'COMPONENTS/CourseCard';
import { Container } from 'COMPONENTS/Container';

import { Content, HomeStyled, PageTitle } from './styles/HomeStyled';

const Home = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const isLoading = useSelector((state) => state.courses.isLoading);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [fetchCourses]);

  return (
    <Container size="sm">
      <HomeStyled>
        <PageTitle>Курсы</PageTitle>
        <Content>
          {!isLoading ? courses.map((course) => <CourseCard key={course.id} {...course} />) : <Loader size={50} />}
        </Content>
      </HomeStyled>
    </Container>
  );
};

export default Home;
