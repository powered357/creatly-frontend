import styled from 'styled-components';

import { colorVariables, commonVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

export const HeaderStyled = styled.header`
  background-color: ${colorVariables.white};
  box-shadow: ${commonVariables.boxShadow};
  a {
    text-decoration: none;
  }
`;

export const Row = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
`;

export const Greetings = styled(Text).attrs(() => ({
  font: 's2',
}))`
  display: block;
  margin-right: 20px;
`;
