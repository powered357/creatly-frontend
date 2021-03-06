import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from 'CONSTANTS/routes';

import { Text, Button } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';
import { AdminNav } from 'COMPONENTS/AdminNav';

import { getToken, removeTokens } from 'UTILS/manageTokens';

import { HeaderStyled, Row, Nav, Greetings } from './styles/HeaderStyled';

export const Header = ({ isAdmin }) => {
  const history = useHistory();
  const token = getToken(isAdmin);
  const { account } = useSelector(({ student }) => student);

  const navigateToLogin = () => {
    history.push(ROUTES.ACCOUNT.LOGIN);
  };

  const handleLogout = () => {
    removeTokens(isAdmin);
    history.push(!isAdmin ? ROUTES.ACCOUNT.LOGIN : ROUTES.ADMIN.LOGIN);
  };

  return (
    <HeaderStyled>
      <Container>
        <Row>
          <Link to={ROUTES.ROOT}>
            <Text font="h3" uppercase>
              {!isAdmin ? 'Zhashkevych workshop' : 'Admin panel'}
            </Text>
          </Link>
          <Nav>
            {isAdmin ? <AdminNav /> : account && <Greetings>Привет, {account.name}!</Greetings>}
            {!token ? <Button onClick={navigateToLogin}>Войти</Button> : <Button onClick={handleLogout}>Выйти</Button>}
          </Nav>
        </Row>
      </Container>
    </HeaderStyled>
  );
};

Header.propTypes = {
  isAdmin: PropTypes.bool,
};

Header.defaultProps = {
  isAdmin: false,
};
