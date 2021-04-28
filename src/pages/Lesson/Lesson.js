import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiGetLesson } from 'API/student';

import { clearCourse, fetchCourse } from 'STORE/courses';

import { Loader } from 'UI-KIT';

import { DocumentTitle } from 'COMPONENTS/DocumentTitle';
import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { CourseSidebar } from 'COMPONENTS/CourseSidebar';

import { LessonStyled } from './styles/LessonStyled';

export const Lesson = () => {
  const dispatch = useDispatch();
  const { courseId, moduleId, lessonId } = useParams();
  const { course, modules, isLoading } = useSelector(({ courses }) => courses);

  useEffect(() => {
    if (!course && !isLoading) {
      dispatch(fetchCourse(courseId));
    }
  }, [course, isLoading]);

  useEffect(() => {
    apiGetLesson(lessonId)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, [lessonId]);

  useEffect(() => () => dispatch(clearCourse()), []);

  console.log('PARAMS', { courseId, moduleId, lessonId });
  console.log('COURSE', { course, modules, isLoading });

  return (
    <LessonStyled>
      <Container>
        <DocumentTitle title={course && course.name} />
        {course && !isLoading ? (
          <CourseTemplate sidebar={<CourseSidebar course={course} modules={modules} />}>Lesson page</CourseTemplate>
        ) : (
          <Loader fullHeight />
        )}
      </Container>
    </LessonStyled>
  );
};
