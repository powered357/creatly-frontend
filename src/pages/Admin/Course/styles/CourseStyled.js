import styled from 'styled-components';

import { colorVariables, transitionVariables } from 'THEME/variables';

import { Text, Icon } from 'UI-KIT';

export const CourseStyled = styled.div`
  height: 100%;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  margin-bottom: 30px;
`;

export const EditIcon = styled(Icon).attrs(() => ({
  name: 'edit',
  size: 28,
  color: 'primary',
}))`
  margin-left: 15px;
  transition: ${transitionVariables.color};
  cursor: pointer;
  &:hover {
    color: ${colorVariables.primaryLight};
  }
`;
