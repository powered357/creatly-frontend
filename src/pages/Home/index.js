import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from 'STORE/home';

import { Content, HomeStyled, PageTitle } from 'PAGES/Home/styles/HomeStyled';

import { Loader } from 'UI-KIT';

import { CourseCart } from 'COMPONENTS/CourseCart';
import { Container } from 'COMPONENTS/Container';

export const HomePage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.home.courses);
  const isLoading = useSelector((state) => state.home.isLoading);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [fetchCourses]);

  return (
    <Container size="sm">
      <HomeStyled>
        <PageTitle>Курсы</PageTitle>
        <Content>
          {!isLoading ? courses.map((course) => <CourseCart key={course.id} {...course} />) : <Loader size={50} />}
        </Content>
      </HomeStyled>
    </Container>
  );
};
