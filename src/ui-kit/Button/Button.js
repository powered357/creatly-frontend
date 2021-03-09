import PropTypes from 'prop-types';

import { Text, Loader } from 'UI-KIT';

import { ButtonStyled } from './styles/ButtonStyled';

export const Button = ({ children, onClick, isLoading, disabled, fullWidth }) => (
  <ButtonStyled
    onClick={!isLoading ? onClick : Function.prototype}
    disabled={disabled || isLoading}
    fullWidth={fullWidth}
  >
    {!isLoading ? <Text font="s1">{children}</Text> : <Loader />}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  isLoading: false,
  disabled: false,
  fullWidth: false,
};
