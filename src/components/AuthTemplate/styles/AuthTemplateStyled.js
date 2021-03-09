import styled from 'styled-components';

import { colorVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

export const AuthStyled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  background-color: ${colorVariables.primaryLight};
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 60px;
  box-shadow: 4px 4px 24px rgba(51, 51, 51, 0.08);
  border-radius: 4px;
  background-color: ${colorVariables.white};
`;

export const Title = styled(Text).attrs(() => ({
  font: 'h1',
  uppercase: true,
}))`
  display: block;
  text-align: center;
  margin-bottom: 30px;
`;
