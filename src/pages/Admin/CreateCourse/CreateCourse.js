import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { apiCreateCourse } from 'API/admin';

import { ROUTES } from 'CONSTANTS/routes';

import { Input, Button, FormError } from 'UI-KIT';

import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { Container } from 'COMPONENTS/Container';
import { AdminSidebar } from 'COMPONENTS/AdminSidebar';

import { CreateCourseStyled, Form, FormField } from './styles/CreateCourseStyled';

export const CreateCourse = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const submitData = ({ name }) => {
    apiCreateCourse(name)
      .then(({ data }) => history.push(ROUTES.ADMIN.COURSE.MAIN.replace(':id', data.id)))
      .catch((error) => console.log(error));
  };

  return (
    <CreateCourseStyled>
      <Container>
        <CourseTemplate sidebar={<AdminSidebar />}>
          <Form onSubmit={handleSubmit(submitData)}>
            <FormField>
              <Input ref={register({ required: true })} name="name" placeholder="Введите название курса" />
              {errors.name?.type === 'required' && <FormError>Это поле обязательное</FormError>}
            </FormField>
            <Button type="submit">Создать</Button>
          </Form>
        </CourseTemplate>
      </Container>
    </CreateCourseStyled>
  );
};
