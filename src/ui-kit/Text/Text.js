import PropTypes from 'prop-types';

import { TextStyled } from './styles/TextStyled';

export const Text = ({ children, font, color, uppercase, ...props }) => (
  <TextStyled {...props} font={font} color={color} uppercase={uppercase}>
    {children}
  </TextStyled>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  font: PropTypes.string,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
};

Text.defaultProps = {
  font: 't1',
  color: 'black',
  uppercase: false,
};
