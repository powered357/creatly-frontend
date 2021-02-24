import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './styles/InputStyled';

export const Input = forwardRef(({ name, type, onChange, placeholder }, ref) => (
  <InputStyled ref={ref} name={name} type={type} onChange={onChange} placeholder={placeholder} />
));

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  onChange: Function.prototype,
  placeholder: '',
};
