import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const ErrorStyled = styled.div`
  padding: 50px;
`;

export const ErrorImg = styled.img`
  display: block;
  width: 500px;
`;

export const ErrorText = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  margin-bottom: 20px;
`;
