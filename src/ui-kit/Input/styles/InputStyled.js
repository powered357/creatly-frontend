import styled from 'styled-components';

import { fontVariables, colorVariables } from 'THEME/variables';

export const InputStyled = styled.input`
  height: 44px;
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
