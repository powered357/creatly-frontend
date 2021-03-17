import PropTypes from 'prop-types';

import { Text } from 'UI-KIT';

import { LinkStyled, RouterLink } from './styled/LinkStyled';

export const Link = ({ children, to, font, external }) => (
  <LinkStyled as={!external && RouterLink} href={to} to={to}>
    <Text font={font}>{children}</Text>
  </LinkStyled>
);

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
