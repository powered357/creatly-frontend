import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { Button } from 'UI-KIT';

import { useQueryString } from 'HOOKS/useQueryString';

import { useAuthAPI } from './hooks/useAuthAPI';
import { AuthStyled, Content, Title, Subtitle, FormButton } from './styles/AuthStyled';

const Verification = () => {
  const history = useHistory();
  const { getQueryParam } = useQueryString();
  const { verifyUser, isLoading } = useAuthAPI();

  useEffect(() => {
    const code = getQueryParam('code');

    if (code) {
      verifyUser({ code });
    } else {
      history.push(ROUTES.ACCOUNT.LOGIN);
    }
  }, []);

  return (
    !isLoading && (
      <AuthStyled>
        <Content>
          <Title>Zhashkevych workshop</Title>
          <Subtitle>
            Ваш аккаунт успешно подтвержден.<br></br> Спасибо за регистрацию!
          </Subtitle>
          <FormButton>
            <Button isLoading={isLoading} fullWidth>
              Войти
            </Button>
          </FormButton>
        </Content>
      </AuthStyled>
    )
  );
};

export default Verification;
