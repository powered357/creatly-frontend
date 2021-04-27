import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ROUTES } from 'CONSTANTS/routes';
import { VALIDATION } from 'CONSTANTS/validation';

import { Input, Button, Link, FormError } from 'UI-KIT';

import { AuthTemplate } from 'COMPONENTS/AuthTemplate';
import { DocumentTitle } from 'COMPONENTS/DocumentTitle';

import { useAuthAPI } from './hooks/useAuthAPI';
import { Form, FormField, FormButton, FormBottom, TextStyled } from './styles/AuthStyled';

const Login = ({ isAdmin }) => {
  const { register, handleSubmit, errors } = useForm();
  const { login, isLoading, serverError, clearServerError } = useAuthAPI(isAdmin);

  return (
    <AuthTemplate title={!isAdmin ? 'Zhashkevych workshop' : 'Admin panel'}>
      <DocumentTitle title="Login" />
      <Form onSubmit={handleSubmit(login)}>
        <FormField>
          <Input
            name="email"
            ref={register({ required: true, pattern: VALIDATION.EMAIL })}
            placeholder="Ел. почта"
            onChange={clearServerError}
          />
          {errors.email?.type === 'required' && <FormError>Это поле обязательное</FormError>}
          {errors.email?.type === 'pattern' && <FormError>Введите валидный email</FormError>}
        </FormField>
        <FormField>
          <Input
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder="Пароль"
            onChange={clearServerError}
          />
          {serverError ? (
            <FormError>{serverError}</FormError>
          ) : (
            errors.password?.type === 'required' && <FormError>Это поле обязательное</FormError>
          )}
        </FormField>
        <FormButton>
          <Button type="submit" isLoading={isLoading} fullWidth>
            Войти
          </Button>
        </FormButton>
        {!isAdmin && (
          <FormBottom>
            <TextStyled font="t3">Еще нет аккаунта?</TextStyled>
            <Link to={ROUTES.ACCOUNT.REGISTRATION} font="t3">
              Зарегистрироваться
            </Link>
          </FormBottom>
        )}
      </Form>
    </AuthTemplate>
  );
};

Login.propTypes = {
  isAdmin: PropTypes.bool,
};

Login.defaultProps = {
  isAdmin: false,
};

export default Login;
