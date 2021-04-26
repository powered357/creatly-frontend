import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const MyCoursesStyled = styled.div`
  height: 100%;
  padding-top: 25px;
  padding-bottom: 100px;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  display: block;
  padding: 25px 32px;
`;
