import PropTypes from 'prop-types';

import { Container } from 'COMPONENTS/Container';

import { MainStyled } from './styles/MainStyled';

export const Main = ({ children }) => (
  <MainStyled>
    <Container>{children}</Container>
  </MainStyled>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
