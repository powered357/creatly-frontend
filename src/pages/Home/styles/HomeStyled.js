import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const HomeStyled = styled.main`
  padding: 50px 0 100px;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  padding: 0 25px;
  margin-bottom: 25px;
`;

export const Content = styled.div``;

export const EmptyText = styled(Text).attrs(() => ({
  font: 't1',
}))`
  display: block;
  max-width: 450px;
  padding: 0 25px;
`;
