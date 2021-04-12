import styled, { css } from 'styled-components';

import { fontVariables, colorVariables } from 'THEME/variables';

const getBasicStyle = () => css`
  width: 100%;
  display: block;
  border: none;
  box-shadow: none;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
  color: ${colorVariables.black};
  font-family: ${fontVariables.t1.family};
  line-height: ${fontVariables.t1.lineHeight};
  font-size: ${fontVariables.t1.size};
`;

export const InputStyled = styled.input`
  ${getBasicStyle()};
  height: 44px;
`;

export const Textarea = styled.textarea`
  ${getBasicStyle()};
  height: 150px;
  resize: none;
  overflow: auto;
`;
