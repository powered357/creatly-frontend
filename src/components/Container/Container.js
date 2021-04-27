import PropTypes from 'prop-types';

import { ContainerStyled } from './styles/ContainerStyled';

export const Container = ({ size, children, autoHeight }) => (
  <ContainerStyled size={size} autoHeight={autoHeight}>
    {children}
  </ContainerStyled>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  autoHeight: PropTypes.bool,
};

Container.defaultProps = {
  size: 'lg',
  autoHeight: false,
};
