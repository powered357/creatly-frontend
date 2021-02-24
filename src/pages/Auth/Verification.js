import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { apiVerification } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';

import { Input, Button } from 'UI-KIT';

import { AuthStyled, Content, Title, Subtitle, Form, FormField, FormError, FormButton } from './styles/AuthStyled';

const Verification = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [serverError, setServerError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmit = ({ code }) => {
    setLoading(true);
    clearServerError();
    apiVerification({ code })
      .then(() => {
        // TODO: implement login on success
        history.push(ROUTES.ACCOUNT.LOGIN);
      })
      .catch(({ message }) => setServerError(message))
      .finally(() => setLoading(false));
  };

  const clearServerError = useCallback(() => setServerError(''), []);

  return (
    <AuthStyled>
      <Content>
        <Title>Zhashkevych workshop</Title>
        <Subtitle>
          Вам на почту отправлен e-mail с подтверждением.<br></br> Введите код из письма.
        </Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <Input
              name="code"
              ref={register({ required: true })}
              placeholder="Введите код"
              onChange={clearServerError}
            />
            {serverError ? (
              <FormError>{serverError}</FormError>
            ) : (
              errors.code?.type === 'required' && <FormError>This field is required</FormError>
            )}
          </FormField>
          <FormButton>
            <Button isLoading={isLoading} fullWidth>
              Войти
            </Button>
          </FormButton>
        </Form>
      </Content>
    </AuthStyled>
  );
};

export default Verification;
