import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { clearCourse, fetchCourse } from 'STORE/courses';

import { Button, Loader } from 'UI-KIT';

import { CourseModule } from 'COMPONENTS/CourseModule';
import { Container } from 'COMPONENTS/Container';
import { DocumentTitle } from 'COMPONENTS/DocumentTitle';

import { Content, Description, CourseInfoStyled, Title, SubTitle, BtnContainer } from './styles/CourseInfoStyled';

export const CourseInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const course = useSelector(({ courses }) => courses.course);
  const modules = useSelector(({ courses }) => courses.modules);

  useEffect(() => {
    dispatch(fetchCourse(params.id));

    return () => dispatch(clearCourse());
  }, []);

  const isModulesBlock = () => !!modules?.length;

  return (
    <Container size="sm">
      <DocumentTitle title={course && course.name} />
      {course ? (
        <CourseInfoStyled>
          <Title>{course.name}</Title>
          <Description>{course.description}</Description>
          {isModulesBlock() ? (
            <Content>
              <SubTitle>Содержание курса</SubTitle>
              {modules.map((module) => (
                <CourseModule key={module.id} {...module} />
              ))}
            </Content>
          ) : (
            <p>Материалы курса находятся в разработке</p>
          )}
          <BtnContainer>
            {isModulesBlock() && (
              <Link to={`/module/${isModulesBlock() ? modules[0].id : ''}`}>
                <Button fullWidth>Начать обучение</Button>
              </Link>
            )}
          </BtnContainer>
        </CourseInfoStyled>
      ) : (
        <Loader size={50} />
      )}
    </Container>
  );
};
