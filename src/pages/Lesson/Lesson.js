import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiGetModuleLessons } from 'API/student';

import { clearCourse, fetchCourse } from 'STORE/courses';

import { Loader } from 'UI-KIT';

import { DocumentTitle } from 'COMPONENTS/DocumentTitle';
import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { CourseSidebar } from 'COMPONENTS/CourseSidebar';
import { serializeToJsx } from 'COMPONENTS/Editor/utils/serializeToJsx';

import { LessonStyled } from './styles/LessonStyled';

export const Lesson = () => {
  const dispatch = useDispatch();
  const { courseId, moduleId, lessonId } = useParams();
  const { course, modules, isLoading } = useSelector(({ courses }) => courses);
  const [lessons, setLessons] = useState(null);
  const [isLessonsLoading, setLessonsLoading] = useState(null);

  useEffect(() => {
    if (!course && !isLoading) {
      dispatch(fetchCourse(courseId));
    }
  }, [course, isLoading]);

  useEffect(() => {
    setLessonsLoading(true);
    apiGetModuleLessons(moduleId)
      .then(({ data }) => setLessons(data.data))
      .finally(() => setLessonsLoading(false));
  }, [moduleId]);

  useEffect(() => () => dispatch(clearCourse()), []);

  const parseContent = () => {
    const content = lessons.filter((item) => item.id === lessonId)[0]?.content;

    if (content) {
      return JSON.parse(content).map((node) => serializeToJsx(node));
    }

    return 'У этого урока пока нет контента :(';
  };

  return (
    <LessonStyled>
      <Container>
        <DocumentTitle title={course && course.name} />
        {course && !isLoading ? (
          <CourseTemplate sidebar={<CourseSidebar course={course} modules={modules} />}>
            {lessons && !isLessonsLoading ? parseContent() : <Loader padding={50} />}
          </CourseTemplate>
        ) : (
          <Loader fullHeight />
        )}
      </Container>
    </LessonStyled>
  );
};
