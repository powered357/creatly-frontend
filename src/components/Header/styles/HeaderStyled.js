import styled from 'styled-components';

import { colorVariables, commonVariables } from 'THEME/variables';

export const HeaderStyled = styled.header`
  background-color: ${colorVariables.white};
  box-shadow: ${commonVariables.boxShadow};
`;

export const Row = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
