import styled from 'styled-components';

import { commonVariables, colorVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

const CARD_WIDTH = 816;
const CARD_PADDING = 32;
const BENEFIT_BORDER = `${colorVariables.grey} 1px solid`;

export const PreviewContainer = styled.div`
  width: ${(CARD_WIDTH - CARD_PADDING) / 2}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto auto 24px auto;
`;

export const OfferList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'row-reverse' : 'column')};
  flex-wrap: ${({ vertical }) => (vertical ? 'wrap' : 'nowrap')};
  justify-content: ${({ vertical }) => (vertical ? 'space-around' : 'space-between')};
  max-width: ${CARD_WIDTH}px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  padding: ${CARD_PADDING}px;
  border-radius: ${commonVariables.borderRadius};
  box-shadow: 4px 4px 16px rgba(51, 51, 51, 0.16);
`;

export const Content = styled.div`
  width: ${(CARD_WIDTH - CARD_PADDING) / 2.1}px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  margin-bottom: 20px;
  padding-right: 50px;
`;

export const BlockTitle = styled(Text).attrs(() => ({
  font: 'h3',
}))`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 50px;
`;

export const Description = styled(Text).attrs(() => ({
  font: 't2',
}))`
  margin-bottom: 20px;
`;

export const Purchase = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  margin-right: 24px;
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: ${({ vertical }) => (vertical ? 'none' : BENEFIT_BORDER)};
  border-right: ${({ vertical }) => (vertical ? BENEFIT_BORDER : 'none')};
  margin-right: ${({ vertical }) => (vertical ? '24px' : 'none')};

  @media (max-width: 877px) {
    border-right: none;
  }
`;

export const Benefit = styled.span`
  margin: 10px;
`;
