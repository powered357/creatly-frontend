import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { clearCourse, fetchCourse } from 'STORE/courses';

import { Button, Loader } from 'UI-KIT';

import { CourseModule } from 'COMPONENTS/CourseModule';
import { Container } from 'COMPONENTS/Container';

import { Content, Description, CourseStyled, Title, SubTitle, BtnContainer } from './styles/CourseStyled';

const Course = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const course = useSelector(({ courses }) => courses.course);
  const modules = useSelector(({ courses }) => courses.modules);

  useEffect(() => {
    dispatch(fetchCourse(params.id));
    return dispatch(clearCourse());
  }, []);

  const checkModulesBlock = () => !!(modules && modules.length);

  return (
    <Container size="sm">
      {course ? (
        <CourseStyled>
          <Title>{course.name}</Title>
          <Description>{course.description}</Description>
          {checkModulesBlock() ? (
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
            {checkModulesBlock() ? (
              <Link to={`/module/${checkModulesBlock() ? modules[0].id : ''}`}>
                <Button fullWidth>Начать обучение</Button>
              </Link>
            ) : null}
          </BtnContainer>
        </CourseStyled>
      ) : (
        <Loader size={50} />
      )}
    </Container>
  );
};

export default Course;
