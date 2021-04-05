import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const MyCoursesStyled = styled.div`
  height: 100%;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  padding-top: 20px;
  padding-left: 30px;
  margin-bottom: 30px;
`;
