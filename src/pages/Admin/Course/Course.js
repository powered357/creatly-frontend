import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { fetchCourse, updateCourse } from 'STORE/admin';

import { Input, Button, FormError, Loader } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { CourseSidebar } from 'COMPONENTS/CourseSidebar';

import { CourseStyled, Form, FormField, Title, ButtonGroup } from './styles/CourseStyled';

export const Course = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentCourse } = useSelector(({ admin }) => admin);
  const { course, modules, isLoading } = currentCourse;
  const { register, handleSubmit, errors, reset } = useForm();
  const [isSendingData, setSendingData] = useState(false);
  const [isPublishing, setPublishing] = useState(false);

  useEffect(() => {
    dispatch(fetchCourse(id))
      .then(unwrapResult)
      .then((data) => reset(data.course));
  }, []);

  const submitData = (data) => {
    setSendingData(true);
    dispatch(updateCourse({ id, data })).finally(() => setSendingData(false));
  };

  const handlePublish = () => {
    setPublishing(true);
    dispatch(
      updateCourse({
        id,
        data: { published: !course.published },
      }),
    ).finally(() => setPublishing(false));
  };

  return (
    <CourseStyled>
      <Container>
        {course && !isLoading ? (
          <CourseTemplate sidebar={<CourseSidebar course={course} modules={modules} isAdmin />}>
            <Form onSubmit={handleSubmit(submitData)}>
              <FormField>
                <Title>Название</Title>
                <Input ref={register({ required: true })} name="name" placeholder="Введите название курса" />
                {errors.name?.type === 'required' && <FormError>Это поле обязательное</FormError>}
              </FormField>
              <FormField>
                <Title>Описание</Title>
                <Input
                  ref={register({ required: true })}
                  name="description"
                  placeholder="Введите описание курса"
                  multiline
                />
                {errors.description?.type === 'required' && <FormError>Это поле обязательное</FormError>}
              </FormField>
              <FormField>
                <Title>Ссылка на курс</Title>
                <Input ref={register()} name="code" placeholder="Введите кастомную ссылку для курса" />
              </FormField>
              <ButtonGroup>
                <Button type="submit" isLoading={isSendingData}>
                  Сохранить
                </Button>
                <Button onClick={handlePublish} theme="inverse" isLoading={isPublishing}>
                  {course.published ? 'Скрыть курс' : 'Опубликовать'}
                </Button>
              </ButtonGroup>
            </Form>
          </CourseTemplate>
        ) : (
          <Loader fullHeight />
        )}
      </Container>
    </CourseStyled>
  );
};
