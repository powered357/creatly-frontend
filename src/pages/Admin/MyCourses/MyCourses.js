import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllCourses } from 'STORE/admin';

import { Loader } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';
import { CourseCard } from 'COMPONENTS/CourseCard';

import { MyCoursesStyled, Title } from './styles/MyCoursesStyled';

export const MyCourses = () => {
  const dispatch = useDispatch();
  const { all: courses, isLoading } = useSelector(({ admin }) => admin.courses);

  useEffect(() => {
    if (!courses?.length) {
      dispatch(fetchAllCourses());
    }
  }, [courses]);

  return (
    <MyCoursesStyled>
      <Container size="sm">
        <Title>Мои курсы</Title>
        {courses?.length && !isLoading ? (
          courses.map((course) => <CourseCard key={course.id} {...course} isEditable />)
        ) : (
          <Loader />
        )}
      </Container>
    </MyCoursesStyled>
  );
};
