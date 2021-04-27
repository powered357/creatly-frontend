import styled from 'styled-components';

export const NavItem = styled.div`
  margin-bottom: 10px;
`;

export const NavStyled = styled.div`
  display: flex;
  margin-right: 10px;
  ${NavItem} {
    flex: 1 0 auto;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const NavIcon = styled.div`
  display: inline-block;
  margin-right: 5px;
`;
