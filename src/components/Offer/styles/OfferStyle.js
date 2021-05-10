import styled from 'styled-components';

import { commonVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

const CARD_WIDTH = 816;
const CARD_PADDING = 32;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${CARD_WIDTH}px;
  min-height: 248px;
  margin: 24px;
  padding: ${CARD_PADDING}px;
  border-radius: ${commonVariables.borderRadius};
  box-shadow: 4px 4px 16px rgba(51, 51, 51, 0.16);
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  margin-bottom: 20px;
  padding-right: 50px;
`;

export const Description = styled(Text).attrs(() => ({
  font: 't2',
}))``;

export const BtnContainer = styled.div`
  width: ${(CARD_WIDTH - CARD_PADDING) / 2}px;
  padding-top: 40px;
`;
