import PropTypes from 'prop-types';

import { AuthStyled, Title } from './styles/AuthStyled';

export const AuthBlock = ({ children }) => (
  <AuthStyled>
    <Title>Zhashkevych workshop</Title>
    {children}
  </AuthStyled>
);

AuthBlock.propTypes = {
  children: PropTypes.node.isRequired,
};
