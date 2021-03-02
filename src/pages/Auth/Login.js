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

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const { loginUser, isLoading, serverError, clearServerError } = useAuthAPI();

  return (
    <AuthStyled>
      <Content>
        <Title>Zhashkevych workshop</Title>
        <Form onSubmit={handleSubmit(loginUser)}>
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
              Войти
            </Button>
          </FormButton>
          <FormBottom>
            <TextStyled font="t3">Еще нет аккаунта?</TextStyled>
            <Link to={ROUTES.ACCOUNT.REGISTRATION} font="t3">
              Зарегистрироваться
            </Link>
          </FormBottom>
        </Form>
      </Content>
    </AuthStyled>
  );
};

export default Login;
