import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const HomeStyled = styled.main`
  padding-top: 25px;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  padding: 25px;
`;

export const Content = styled.div``;
