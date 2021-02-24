import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { apiRegistration } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';
import { VALIDATION } from 'CONSTANTS/validation';

import { Input, Button, Link } from 'UI-KIT';

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
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [serverError, setServerError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmit = ({ name, email, password }) => {
    setLoading(true);
    clearServerError();
    apiRegistration({ name, email, password })
      .then(() => {
        history.push(ROUTES.ACCOUNT.VERIFICATION);
      })
      .catch(({ message }) => setServerError(message))
      .finally(() => setLoading(false));
  };

  const clearServerError = useCallback(() => setServerError(''), []);

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
