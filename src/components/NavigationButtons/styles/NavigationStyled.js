import styled from 'styled-components';

import { colorVariables, transitionVariables } from 'THEME/variables';

import { Icon, Text } from 'UI-KIT';

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  margin: 0 -15px;
`;

export const ButtonText = styled(Text).attrs(() => ({
  font: 's3',
}))`
  line-height: 24px;
  transition: ${transitionVariables.color};
`;

export const IconStyled = styled(Icon).attrs(() => ({
  size: 25,
}))`
  transition: ${transitionVariables.transform};
`;

export const PrevIcon = styled(IconStyled).attrs(() => ({
  name: 'arrow_back_ios_new',
}))`
  margin-right: 5px;
`;

export const NextIcon = styled(IconStyled).attrs(() => ({
  name: 'arrow_forward_ios',
}))`
  margin-left: 5px;
`;

export const NavigationButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  &:hover {
    ${ButtonText} {
      color: ${colorVariables.grey};
    }
    ${PrevIcon} {
      transform: translate(-5px, 0);
    }
    ${NextIcon} {
      transform: translate(5px, 0);
    }
  }
`;

export const EmptyElement = styled.div``;
