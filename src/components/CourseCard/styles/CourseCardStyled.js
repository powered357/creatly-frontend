import styled from 'styled-components';

import { commonVariables } from 'THEME/variables';

import { Text, Icon } from 'UI-KIT';

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

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    font-size: 10px;
    font-weight: 400;
    height: 64px;
  }
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
}))`
  margin-bottom: 20px;
  padding-right: 50px;
`;

export const LockIcon = styled(Icon).attrs(() => ({
  size: 24,
  name: 'lock',
  color: 'grey',
}))`
  margin-left: 10px;
`;

export const Description = styled(Text).attrs(() => ({
  font: 't2',
}))``;

export const BtnContainer = styled.div`
  width: ${(CARD_WIDTH - CARD_PADDING) / 2}px;
`;

export const EditGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
`;

export const EditLink = styled.div`
  display: block;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const IconStyled = styled(Icon)`
  display: inline-block;
  margin-right: 5px;
  padding-bottom: 2px;
`;

export const EditIcon = styled(IconStyled).attrs(() => ({
  name: 'edit',
}))``;

export const DeleteIcon = styled(IconStyled).attrs(() => ({
  name: 'delete',
}))``;
