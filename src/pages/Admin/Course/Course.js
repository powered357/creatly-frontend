import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { apiGetCourse, apiUpdateCourse } from 'API/admin';

import { Input, Button, FormError, Loader } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { AdminSidebar } from 'COMPONENTS/AdminSidebar';

import { CourseStyled, Form, FormField, Title, ButtonGroup } from './styles/CourseStyled';

export const Course = () => {
  const { id } = useParams();
  const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [isSendingData, setSendingData] = useState(false);
  const [isPublishing, setPublishing] = useState(false);
  const [course, setCourse] = useState({});
  const { published } = course;

  useEffect(() => {
    setLoading(true);
    apiGetCourse(id)
      .then(({ data }) => {
        const { name, description } = data.course;

        setCourse(data.course);
        reset({ name, description });
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  }, []);

  const submitData = (data) => {
    setSendingData(true);
    apiUpdateCourse({ id, data })
      .catch(handleError)
      .finally(() => setSendingData(false));
  };

  const handlePublish = () => {
    setPublishing(true);
    apiUpdateCourse({
      id,
      data: { published: !published },
    })
      .catch(handleError)
      .finally(() => setPublishing(false));
  };

  const handleError = (error) => console.log(error);

  return (
    <CourseStyled>
      <Container>
        <CourseTemplate sidebar={<AdminSidebar />}>
          <AdminSidebar direction="horizontal" />
          {Object.keys(course).length && !isLoading ? (
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
              <ButtonGroup>
                <Button type="submit" isLoading={isSendingData}>
                  Сохранить
                </Button>
                <Button onClick={handlePublish} theme="inverse" isLoading={isPublishing}>
                  {published ? 'Скрыть курс' : 'Опубликовать'}
                </Button>
              </ButtonGroup>
            </Form>
          ) : (
            <Loader />
          )}
        </CourseTemplate>
      </Container>
    </CourseStyled>
  );
};
