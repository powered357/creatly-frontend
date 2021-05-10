import styled from 'styled-components';

import { colorVariables, transitionVariables } from 'THEME/variables';

import { Text, Icon } from 'UI-KIT';

export const CourseStyled = styled.div`
  height: 100%;
`;

export const Form = styled.form`
  padding-top: 2px;
`;

export const FormField = styled.div`
  position: relative;
  padding-bottom: 30px;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h3',
}))`
  display: block;
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  padding-top: 20px;
  button:not(:last-child) {
    margin-right: 20px;
  }
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
