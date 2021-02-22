import styled from 'styled-components';

import { sizeVariables } from 'THEME/variables';

export const ContainerStyled = styled.div`
  max-width: ${({ size }) => sizeVariables.container[size]};
  padding: 0 40px;
  margin: 0 auto;
`;
