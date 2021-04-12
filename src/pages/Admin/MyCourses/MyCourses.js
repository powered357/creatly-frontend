import { useEffect, useState } from 'react';

import { apiGetAllCourses } from 'API/admin';

import { Loader } from 'UI-KIT';

import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { Container } from 'COMPONENTS/Container';
import { AdminSidebar } from 'COMPONENTS/AdminSidebar';
import { CourseCard } from 'COMPONENTS/CourseCard';

import { MyCoursesStyled, Title } from './styles/MyCoursesStyled';

export const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiGetAllCourses()
      .then(({ data: { data } }) => setCourses(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <MyCoursesStyled>
      <Container>
        <CourseTemplate sidebar={<AdminSidebar />}>
          <Title>Мои курсы</Title>
          {!!courses.length && !isLoading ? (
            courses.map((course) => <CourseCard key={course.id} {...course} isEditable />)
          ) : (
            <Loader />
          )}
        </CourseTemplate>
      </Container>
    </MyCoursesStyled>
  );
};
