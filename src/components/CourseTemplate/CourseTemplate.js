import PropTypes from 'prop-types';

import { CourseTemplateStyled, Sidebar, Content } from './styles/CourseTemplateStyled';

export const CourseTemplate = ({ sidebar, children }) => (
  <CourseTemplateStyled>
    <Sidebar>{sidebar}</Sidebar>
    <Content>{children}</Content>
  </CourseTemplateStyled>
);

CourseTemplate.propTypes = {
  sidebar: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
