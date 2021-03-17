import PropTypes from 'prop-types';

import { MainStyled } from './styles/MainStyled';

export const Main = ({ children }) => <MainStyled>{children}</MainStyled>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
