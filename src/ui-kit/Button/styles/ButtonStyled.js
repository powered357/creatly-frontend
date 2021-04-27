import styled, { css } from 'styled-components';

import { colorVariables, commonVariables, transitionVariables } from 'THEME/variables';

const setTheme = (theme) => {
  switch (theme) {
    case 'inverse': {
      return css`
        background-color: ${colorVariables.white};
        border: 2px solid ${colorVariables.primary};
        &:not(:disabled):hover {
          background-color: ${colorVariables.primary};
        }
      `;
    }
    case 'danger': {
      return css`
        background-color: ${colorVariables.danger};
        border: 2px solid ${colorVariables.danger};
        &:not(:disabled):hover {
          background-color: ${colorVariables.white};
        }
      `;
    }
    default: {
      return css`
        background-color: ${colorVariables.primary};
        border: 2px solid ${colorVariables.primary};
        &:not(:disabled):hover {
          background-color: ${colorVariables.white};
        }
      `;
    }
  }
};

export const ButtonStyled = styled.button`
  height: 50px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '190px')};
  border-radius: ${commonVariables.borderRadius};
  box-shadow: none;
  text-align: center;
  padding: 0 10px;
  transition: ${transitionVariables.bgColor};
  ${({ theme }) => setTheme(theme)};
`;
