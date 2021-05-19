import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ROUTES } from 'CONSTANTS/routes';
import { VALIDATION } from 'CONSTANTS/validation';

import { Input, Button, Link, FormError } from 'UI-KIT';

import { AuthTemplate } from 'COMPONENTS/AuthTemplate';
import { DocumentTitle } from 'COMPONENTS/DocumentTitle';

import { analytics } from 'UTILS/analytics';

import { useAuthAPI } from './hooks/useAuthAPI';
import { Subtitle, Form, FormField, FormButton, FormBottom, TextStyled } from './styles/AuthStyled';

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();
  const { registerUser, isLoading, serverError, clearServerError } = useAuthAPI();
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = ({ name, email, password }) => {
    registerUser({ name, email, password }).then(({ status }) => {
      if (status === 201) {
        setSubmitted(true);
        analytics.event({
          category: 'User',
          action: 'Registration',
        });
      }
    });
  };

  return (
    <AuthTemplate title="Zhashkevych workshop">
      <DocumentTitle title="Регистрация" />
      {!isSubmitted ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <Input
              name="name"
              ref={register({ required: true, pattern: VALIDATION.NAME })}
              placeholder="Имя"
              onChange={clearServerError}
            />
            {errors.name?.type === 'required' && <FormError>Это поле обязательное</FormError>}
            {errors.name?.type === 'pattern' && <FormError>Введите корректное имя</FormError>}
          </FormField>
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
              ref={register({ required: true, pattern: VALIDATION.PASSWORD })}
              placeholder="Пароль"
              onChange={clearServerError}
            />
            {serverError && <FormError>{serverError}</FormError>}
            {errors.password?.type === 'required' && <FormError>Это поле обязательное</FormError>}
            {errors.password?.type === 'pattern' && (
              <FormError>Пароль должен состоять минимум из 8 символов </FormError>
            )}
          </FormField>
          <FormButton>
            <Button type="submit" isLoading={isLoading} fullWidth>
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
      ) : (
        <Subtitle>
          Спасибо за регистрацию!<br></br>
          Вам на почту отправлено письмо с подтверждением.<br></br>
          Для завершения регистрации перейдите по ссылке из письма.
        </Subtitle>
      )}
    </AuthTemplate>
  );
};

export default Registration;
