import { Link, useHistory } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { Text, Button } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';

import { HeaderStyled, Row } from './styles/HeaderStyled';

export const Header = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(ROUTES.ACCOUNT.LOGIN);
  };

  return (
    <HeaderStyled>
      <Container>
        <Row>
          <Link to="/">
            <Text font="h3" uppercase>
              Zhashkevych workshop
            </Text>
          </Link>
          <Button onClick={onClick}>Войти</Button>
        </Row>
      </Container>
    </HeaderStyled>
  );
};
