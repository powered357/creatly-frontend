import PropTypes from 'prop-types';

import { IconStyled } from './styles/IconStyled';

export const Icon = ({ name, fontSize }) => (
  <IconStyled fontSize={fontSize} className="material-icons">
    {name}
  </IconStyled>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

Icon.defaultProps = {
  fontSize: 20,
};
