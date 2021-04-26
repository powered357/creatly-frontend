import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

export const TextStyled = styled(Text).attrs(() => ({
  font: 't1',
}))`
  display: block;
  text-align: center;
  margin-bottom: 40px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  > button:not(:last-child) {
    margin-right: 20px;
  }
`;
