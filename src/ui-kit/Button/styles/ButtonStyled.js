import styled from 'styled-components';

import { colorVariables, commonVariables, transitionVariables } from 'THEME/variables';

export const ButtonStyled = styled.button`
  height: 50px;
  width: 100%;
  max-width: 190px;
  border-radius: ${commonVariables.borderRadius};
  background-color: ${colorVariables.primary};
  border: 2px solid ${colorVariables.primary};
  box-shadow: none;
  text-align: center;
  padding: 0 10px;
  transition: ${transitionVariables.bgColor};
  &:hover {
    background-color: ${colorVariables.white};
  }
`;
