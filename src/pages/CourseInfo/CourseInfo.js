import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { fetchCourse } from 'STORE/courses';

import { Button, Loader } from 'UI-KIT';

import { CourseModule } from 'COMPONENTS/CourseModule';
import { Container } from 'COMPONENTS/Container';
import { DocumentTitle } from 'COMPONENTS/DocumentTitle';
import Offer from 'COMPONENTS/Offer';

import { replaceByObj } from 'UTILS/replaceByObj';

import { Content, Description, CourseInfoStyled, Title, SubTitle, BtnContainer } from './styles/CourseInfoStyled';

export const CourseInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { course, modules, isLoading } = useSelector(({ courses }) => courses);
  const hasModules = !!modules?.length;
  const hasLessons = hasModules && !!modules[0]?.lessons.length;

  useEffect(() => {
    dispatch(fetchCourse(params.id));
  }, []);

  const createLessonLink = () => {
    const moduleId = modules[0].id;
    const lessonId = modules[0].lessons[0].id;

    return replaceByObj(ROUTES.COURSE.LESSON, {
      ':courseId': course.id,
      ':moduleId': moduleId,
      ':lessonId': lessonId,
    });
  };

  return (
    <Container size="sm">
      <DocumentTitle title={course && course.name} />
      {course && !isLoading ? (
        <CourseInfoStyled>
          <Title>{course.name}</Title>
          <Description>{course.description}</Description>
          <Content>
            {hasModules ? (
              <>
                <SubTitle>Содержание курса</SubTitle>
                {modules.map((item) => (
                  <CourseModule key={item.id} {...item} />
                ))}
              </>
            ) : (
              <p>Материалы курса находятся в разработке</p>
            )}
          </Content>
          {hasLessons && (
            <BtnContainer>
              <Link to={createLessonLink()}>
                <Button fullWidth>Начать обучение</Button>
              </Link>
            </BtnContainer>
          )}
        </CourseInfoStyled>
      ) : (
        <Loader size={50} />
      )}
      <Offer />
    </Container>
  );
};
