import styled from 'styled-components';

import { colorVariables, transitionVariables } from 'THEME/variables';

import { Text, Icon } from 'UI-KIT';

export const SidebarStyled = styled.div``;

export const Title = styled(Text).attrs(() => ({
  font: 's2',
}))`
  display: block;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Nav = styled.div`
  padding-left: 15px;
`;

export const NavItem = styled(Text).attrs(() => ({
  font: 't1',
}))`
  display: block;
  line-height: 24px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}`;

export const NavLink = styled(Text).attrs(() => ({
  font: 's3',
}))`
  line-height: 24px;
  cursor: pointer;
  transition: ${transitionVariables.color};
  &:hover {
    color: ${colorVariables.grey};
  }
`;

export const AddIcon = styled(Icon).attrs(() => ({
  name: 'add',
  size: 18,
}))`
  padding-right: 3px;
  padding-bottom: 4px;
`;

export const LockIcon = styled(Icon).attrs(() => ({
  name: 'lock',
  size: 18,
}))`
  padding-left: 3px;
  padding-bottom: 4px;
`;
