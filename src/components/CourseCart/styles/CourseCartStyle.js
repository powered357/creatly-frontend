import styled from 'styled-components';

import { commonVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

const CART_WIDTH = 816;
const CART_PADDING = 32;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${CART_WIDTH}px;
  min-height: 248px;
  margin-bottom: 24px;
  padding: ${CART_PADDING}px;
  border-radius: ${commonVariables.borderRadius};
  box-shadow: 4px 4px 16px rgba(51, 51, 51, 0.16);
`;

export const CartTitle = styled(Text).attrs(() => ({
  font: 'h2',
}))`
  display: flex;
  justify-content: space-between;

  > img {
    height: 64px;
  }
`;

export const CourseBody = styled(Text).attrs(() => ({
  font: 't2',
}))``;

export const BtnContainer = styled.div`
  width: ${(CART_WIDTH - CART_PADDING) / 2}px;
`;
