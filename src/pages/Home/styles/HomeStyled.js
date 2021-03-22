import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const HomeStyled = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const PageTitle = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  margin: 24px;
`;

export const Content = styled.div``;
