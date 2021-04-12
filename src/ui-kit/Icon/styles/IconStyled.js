import styled from 'styled-components';

import { colorVariables } from 'THEME/variables';

export const IconStyled = styled.span`
  font-size: ${({ size }) => `${size}px`};
  vertical-align: middle;
  color: ${({ color }) => colorVariables[color]};
`;
