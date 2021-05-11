import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiGetModuleLessons } from 'API/student';

import { ROUTES } from 'CONSTANTS/routes';

import { clearCourse, fetchCourse } from 'STORE/courses';

import { Loader } from 'UI-KIT';

import { DocumentTitle } from 'COMPONENTS/DocumentTitle';
import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { CourseSidebar } from 'COMPONENTS/CourseSidebar';
import { NavigationButtons } from 'COMPONENTS/NavigationButtons';
import { serializeToJsx } from 'COMPONENTS/Editor/utils/serializeToJsx';

import { replaceByObj } from 'UTILS/replaceByObj';

import { LessonStyled } from './styles/LessonStyled';

export const Lesson = () => {
  const dispatch = useDispatch();
  const { courseId, moduleId, lessonId } = useParams();
  const { course, modules, isLoading } = useSelector(({ courses }) => courses);
  const [lessons, setLessons] = useState(null);
  const [isLessonsLoading, setLessonsLoading] = useState(null);

  console.log({ modules });

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

  const getLessonRoute = (direction) => {
    const moduleIndex = modules.findIndex((item) => item.id === moduleId);
    const lessonIndex = lessons.findIndex((item) => item.id === lessonId);
    const newLessonIndex = direction === 'prev' ? lessonIndex - 1 : lessonIndex + 1;
    let newModuleId = moduleId;
    let newLessonId = lessons[newLessonIndex]?.id;

    if (lessonIndex === 0 && direction === 'prev') {
      const prevModule = modules[moduleIndex - 1];
      const lessonsLength = prevModule?.lessons.length;
      const prevLessonId = prevModule?.lessons[lessonsLength - 1]?.id;

      if (prevLessonId) {
        newModuleId = prevModule.id;
        newLessonId = prevLessonId;
      }
    }

    if (lessonIndex === lessons.length - 1 && direction === 'next') {
      const nextModule = modules[moduleIndex + 1];
      const nextLessonId = nextModule?.lessons[0]?.id;

      if (nextLessonId) {
        newModuleId = nextModule.id;
        newLessonId = nextLessonId;
      }
    }

    if (newLessonId) {
      return replaceByObj(ROUTES.COURSE.LESSON, {
        ':courseId': courseId,
        ':moduleId': newModuleId,
        ':lessonId': newLessonId,
      });
    }

    return '';
  };

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
            {lessons && !isLessonsLoading ? (
              <>
                {parseContent()}
                <NavigationButtons prevRoute={getLessonRoute('prev')} nextRoute={getLessonRoute('next')} />
              </>
            ) : (
              <Loader padding={50} />
            )}
          </CourseTemplate>
        ) : (
          <Loader fullHeight />
        )}
      </Container>
    </LessonStyled>
  );
};
