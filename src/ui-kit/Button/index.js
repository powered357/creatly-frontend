import PropTypes from 'prop-types';

import { Text } from 'UI-KIT';

import { ButtonStyled } from './styles/ButtonStyled';

export const Button = ({ children, onClick }) => (
  <ButtonStyled onClick={onClick}>
    <Text font="s1">{children}</Text>
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
};
