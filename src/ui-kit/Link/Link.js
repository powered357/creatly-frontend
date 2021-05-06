import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'UI-KIT';

import { LinkStyled, RouterLink } from './styled/LinkStyled';

export const Link = forwardRef(({ children, to, onClick, font, isActive, external }, ref) => (
  <LinkStyled
    ref={ref}
    as={!external && RouterLink}
    href={to}
    to={to}
    onClick={onClick}
    $isActive={isActive}
    {...(external && { target: '_blank' })}
  >
    <Text font={font}>{children}</Text>
  </LinkStyled>
));

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  font: PropTypes.string,
  isActive: PropTypes.bool,
  external: PropTypes.bool,
};

Link.defaultProps = {
  font: 't1',
  to: null,
  onClick: null,
  isActive: false,
  external: false,
};
