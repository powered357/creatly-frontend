import styled from 'styled-components';

import { Text } from 'UI-KIT';

export const FormErrorStyled = styled(Text).attrs(() => ({
  font: 't3',
  color: 'danger',
}))`
  position: absolute;
  left: 0;
  bottom: 10px;
`;
