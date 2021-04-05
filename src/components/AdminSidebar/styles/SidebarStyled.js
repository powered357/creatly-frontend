import styled, { css } from 'styled-components';

export const Sidebar = styled.div`
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      display: flex;
      margin-bottom: 20px;
      ${NavItem} {
        margin-bottom: 0;
        margin-right: 20px;
      }
    `}
`;

export const NavItem = styled.div`
  margin-bottom: 10px;
`;

export const NavIcon = styled.div`
  display: inline-block;
  margin-right: 5px;
`;
