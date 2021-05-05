import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const CourseInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 100px;
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
  margin-bottom: 25px;
`;

export const BtnContainer = styled.div`
  width: 50%;
`;
