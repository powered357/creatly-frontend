import PropTypes from 'prop-types';

import { ContainerStyled } from './styles/ContainerStyled';

export const Container = ({ size, children }) => <ContainerStyled size={size}>{children}</ContainerStyled>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Container.defaultProps = {
  size: 'lg',
};
