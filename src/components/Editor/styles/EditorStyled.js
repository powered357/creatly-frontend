import styled from 'styled-components';

import { colorVariables, commonVariables, transitionVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

export const EditorStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  box-shadow: ${commonVariables.boxShadow};
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
`;

export const ToolbarButtonStyled = styled.div`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colorVariables.black : colorVariables.grey)};
  transition: ${transitionVariables.color};
  &:not(:first-child) {
    margin-left: 15px;
  }
`;

export const Heading1 = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
`;

export const Heading2 = styled(Text).attrs(() => ({
  font: 'h2',
}))`
  display: block;
`;

export const Blockquote = styled.div`
  border-left: 2px solid #ddd;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
  color: #aaa;
  font-style: italic;
`;

export const List = styled.ul`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

export const BulletedList = styled(List)`
  list-style-type: disc;
  li {
    list-style-type: disc;
  }
`;

export const NumberedList = styled(List)`
  list-style-type: decimal;
  li {
    list-style-type: decimal;
  }
`;

export const Code = styled.code`
  display: block;
  font-family: Consolas, 'courier new';
  color: crimson;
  background-color: #f1f1f1;
  padding: 2px;
`;

export const EditorText = styled(Text)`
  display: block;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const FormField = styled.div`
  width: 100%;
  margin-right: 20px;
`;

export const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
  box-shadow: ${({ isFocused }) => (isFocused ? '0 0 0 3px #B4D5FF' : 'none')};
  margin: 10px 0;
`;
