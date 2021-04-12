import PropTypes from 'prop-types';

import { Text, Loader } from 'UI-KIT';

import { ButtonStyled } from './styles/ButtonStyled';

export const Button = ({ children, type, theme, onClick, isLoading, disabled, fullWidth }) => (
  <ButtonStyled
    type={type}
    theme={theme}
    onClick={!isLoading ? onClick : Function.prototype}
    disabled={disabled || isLoading}
    fullWidth={fullWidth}
  >
    {!isLoading ? <Text font="s1">{children}</Text> : <Loader />}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  onClick: null,
  isLoading: false,
  disabled: false,
  fullWidth: false,
};
