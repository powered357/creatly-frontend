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

export const Subtitle = styled(Text).attrs(() => ({
  font: 't2',
}))`
  display: block;
  text-align: center;
  margin-bottom: 25px;
`;

export const Form = styled.form``;

export const FormField = styled.div`
  position: relative;
  padding-bottom: 30px;
`;

export const FormError = styled(Text).attrs(() => ({
  font: 't3',
  color: 'danger',
}))`
  position: absolute;
  left: 0;
  bottom: 10px;
`;

export const FormButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const FormBottom = styled.div`
  text-align: center;
  padding-top: 10px;
`;

export const TextStyled = styled(Text)`
  display: block;
  margin-bottom: -5px;
`;
