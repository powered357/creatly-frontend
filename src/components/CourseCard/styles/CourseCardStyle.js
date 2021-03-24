import styled from 'styled-components';

import { commonVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

const CARD_WIDTH = 816;
const CARD_PADDING = 32;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${CARD_WIDTH}px;
  min-height: 248px;
  margin-bottom: 24px;
  padding: ${CARD_PADDING}px;
  border-radius: ${commonVariables.borderRadius};
  box-shadow: 4px 4px 16px rgba(51, 51, 51, 0.16);
`;

export const CardTitle = styled(Text).attrs(() => ({
  font: 'h2',
}))`
  display: flex;
  justify-content: space-between;
  > img {
    font-size: 10px;
    font-weight: 400;
    height: 64px;
  }
`;

export const CourseBody = styled(Text).attrs(() => ({
  font: 't2',
}))``;

export const BtnContainer = styled.div`
  width: ${(CARD_WIDTH - CARD_PADDING) / 2}px;
`;
