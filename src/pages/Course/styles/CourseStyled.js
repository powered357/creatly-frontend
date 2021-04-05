import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const CourseStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))``;

export const Description = styled.p`
  margin-bottom: 40px;
`;

export const SubTitle = styled(Text).attrs(() => ({
  font: 'h2',
}))``;

export const Content = styled.div`
  width: 100%;
`;

export const BtnContainer = styled.div`
  margin-top: 24px;
  width: 50%;
`;
