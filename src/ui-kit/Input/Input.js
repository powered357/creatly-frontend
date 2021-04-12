import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { InputStyled, Textarea } from './styles/InputStyled';

export const Input = forwardRef(({ name, type, onChange, placeholder, multiline }, ref) => (
  <InputStyled
    ref={ref}
    as={multiline && Textarea}
    name={name}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
  />
));

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  onChange: Function.prototype,
  placeholder: '',
  multiline: false,
};
