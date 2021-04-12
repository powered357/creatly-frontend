import PropTypes from 'prop-types';

import { IconStyled } from './styles/IconStyled';

export const Icon = ({ className, name, color, size, ...rest }) => (
  <IconStyled className={`${className} material-icons`} color={color} size={size} {...rest}>
    {name}
  </IconStyled>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  className: '',
  color: 'black',
  size: 20,
};
