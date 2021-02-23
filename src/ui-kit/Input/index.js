import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './styles/InputStyled';

export const Input = forwardRef(({ name, type, placeholder }, ref) => (
  <InputStyled ref={ref} name={name} type={type} placeholder={placeholder} />
));

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
};
