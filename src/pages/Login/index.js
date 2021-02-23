import { useForm } from 'react-hook-form';

import { Input, Button } from 'UI-KIT';

import { AuthBlock } from 'COMPONENTS/AuthBlock';

import { LoginStyled, Form, FormField, FormError, FormButton } from './styles/LoginStyled';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log('Form data: ', data);

  return (
    <LoginStyled>
      <AuthBlock>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <Input
              name="email"
              ref={register({ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
              placeholder="Email"
            />
            {errors.email && errors.email.type === 'required' && <FormError>This field is required</FormError>}
            {errors.email && errors.email.type === 'pattern' && <FormError>Enter a valid email</FormError>}
          </FormField>
          <FormField>
            <Input name="password" ref={register({ required: true })} placeholder="Password" type="password" />
            {errors.password && errors.password.type === 'required' && <FormError>This field is required</FormError>}
          </FormField>
          <FormButton>
            <Button>Войти</Button>
          </FormButton>
        </Form>
      </AuthBlock>
    </LoginStyled>
  );
};

export default Login;
