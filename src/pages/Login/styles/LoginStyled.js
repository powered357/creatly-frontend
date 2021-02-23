import styled from 'styled-components';

import { colorVariables } from 'THEME/variables';

import { Text } from 'UI-KIT';

export const LoginStyled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  background-color: ${colorVariables.primaryLight};
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
  padding-top: 10px;
`;
