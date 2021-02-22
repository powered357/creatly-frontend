import styled from 'styled-components';

import { fontFamilyVariables, colorVariables, fontVariables } from 'THEME/variables';

export const AppStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${colorVariables.black};
  font-size: ${fontVariables.t1.size};
  letter-spacing: ${fontVariables.t1.spacing};
  font-family: ${fontFamilyVariables.reg};
  line-height: 1.5;
`;

export const AppContent = styled.main`
  flex: 1 0 auto;
`;
