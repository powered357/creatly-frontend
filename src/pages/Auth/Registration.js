import { useForm } from 'react-hook-form';

import { ROUTES } from 'CONSTANTS/routes';
import { VALIDATION } from 'CONSTANTS/validation';

import { Input, Button, Link } from 'UI-KIT';

import { useAuthAPI } from './hooks/useAuthAPI';
import {
  AuthStyled,
  Content,
  Title,
  Form,
  FormField,
  FormError,
  FormButton,
  FormBottom,
  TextStyled,
} from './styles/AuthStyled';

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();
  const { registerUser, isLoading, serverError, clearServerError } = useAuthAPI();

  const onSubmit = ({ name, email, password }) => {
    registerUser({ name, email, password }).then((res) => console.log({ res }));
  };

  return (
    <AuthStyled>
      <Content>
        <Title>Zhashkevych workshop</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <Input name="name" ref={register({ required: true })} placeholder="Name" onChange={clearServerError} />
            {errors.name?.type === 'required' && <FormError>This field is required</FormError>}
          </FormField>
          <FormField>
            <Input
              name="email"
              ref={register({ required: true, pattern: VALIDATION.EMAIL })}
              placeholder="Email"
              onChange={clearServerError}
            />
            {errors.email?.type === 'required' && <FormError>This field is required</FormError>}
            {errors.email?.type === 'pattern' && <FormError>Enter a valid email</FormError>}
          </FormField>
          <FormField>
            <Input
              type="password"
              name="password"
              ref={register({ required: true })}
              placeholder="Password"
              onChange={clearServerError}
            />
            {serverError ? (
              <FormError>{serverError}</FormError>
            ) : (
              errors.password?.type === 'required' && <FormError>This field is required</FormError>
            )}
          </FormField>
          <FormButton>
            <Button isLoading={isLoading} fullWidth>
              Зарегистрироваться
            </Button>
          </FormButton>
          <FormBottom>
            <TextStyled font="t3">Уже есть аккаунт?</TextStyled>
            <Link to={ROUTES.ACCOUNT.LOGIN} font="t3">
              Войти
            </Link>
          </FormBottom>
        </Form>
      </Content>
    </AuthStyled>
  );
};

export default Registration;
