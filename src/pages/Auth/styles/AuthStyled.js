import styled from 'styled-components';

import { Text } from 'UI-KIT';

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
