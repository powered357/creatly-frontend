import styled from 'styled-components';

import { colorVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

export const FooterStyled = styled.footer`
  color: ${colorVariables.white};
  background-color: ${colorVariables.black};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 16px 0;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Text).attrs(() => ({
  font: 't3',
  color: colorVariables.white,
}))`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const BodyItem = styled(Text).attrs(() => ({
  font: 't3',
  color: colorVariables.white,
}))`
  pointer-events: ${(props) => (props.inactive ? 'none' : 'auto')};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  ${BodyItem} {
    > a {
      text-decoration: none;
      color: ${colorVariables.white};
    }
  }
  ${BodyItem}:not(:last-child) {
    margin-bottom: 8px;
  }
`;
