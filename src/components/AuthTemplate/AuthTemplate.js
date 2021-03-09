import PropTypes from 'prop-types';

import { AuthStyled, Content, Title } from './styles/AuthTemplateStyled';

export const AuthTemplate = ({ title, children }) => (
  <AuthStyled>
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </AuthStyled>
);

AuthTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
