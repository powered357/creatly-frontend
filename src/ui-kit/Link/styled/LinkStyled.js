import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colorVariables, transitionVariables } from 'THEME/variables';

export const LinkStyled = styled.a`
  position: relative;
  text-decoration: none;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    opacity: 1;
    height: 1px;
    background-color: ${colorVariables.black};
    transition: ${transitionVariables.opacity};
  }
  &:hover {
    &:after {
      opacity: 0;
    }
  }
  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: none;
      &:after {
        opacity: 0;
      }
    `}
  }
`;

export const RouterLink = styled(Link)``;
