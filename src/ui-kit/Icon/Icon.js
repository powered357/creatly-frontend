import PropTypes from 'prop-types';

import { IconStyled } from './styles/IconStyled';

export const Icon = ({ name }) => <IconStyled className="material-icons">{name}</IconStyled>;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
