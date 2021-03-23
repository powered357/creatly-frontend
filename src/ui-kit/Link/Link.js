import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'UI-KIT';

import { LinkStyled, RouterLink } from './styled/LinkStyled';

export const Link = forwardRef(({ children, to, font, external }, ref) => (
  <LinkStyled ref={ref} as={!external && RouterLink} href={to} to={to}>
    <Text font={font}>{children}</Text>
  </LinkStyled>
));

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  font: PropTypes.string,
  external: PropTypes.bool,
};

Link.defaultProps = {
  font: 't1',
  external: false,
};
