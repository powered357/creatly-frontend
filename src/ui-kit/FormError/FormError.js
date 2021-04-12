import PropTypes from 'prop-types';

import { FormErrorStyled } from './styles/FormErrorStyled';

export const FormError = ({ children }) => <FormErrorStyled>{children}</FormErrorStyled>;

FormError.propTypes = {
  children: PropTypes.node.isRequired,
};
