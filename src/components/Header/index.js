import { useHistory } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { Text, Button } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';

import { HeaderStyled, Row } from './styles/HeaderStyled';

export const Header = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(ROUTES.LOGIN);
  };

  return (
    <HeaderStyled>
      <Container>
        <Row>
          <Text font="h3" uppercase>
            Zhashkevych workshop
          </Text>
          <Button onClick={onClick}>Sign in</Button>
        </Row>
      </Container>
    </HeaderStyled>
  );
};
