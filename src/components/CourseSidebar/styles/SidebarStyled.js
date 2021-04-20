import styled from 'styled-components';

import { colorVariables, transitionVariables } from 'THEME/variables';

import { Text, Icon } from 'UI-KIT';

export const SidebarStyled = styled.div`
  margin-bottom: 100px;
`;

export const Title = styled(Text).attrs(() => ({
  font: 's2',
}))`
  position: relative;
  display: block;
  line-height: 24px;
  padding-top: 3px;
  margin-left: 18px;
  margin-bottom: 20px;
`;

export const Nav = styled.div`
  padding-left: 18px;
  margin-bottom: 15px;
`;

export const NavItem = styled(Text).attrs(() => ({
  font: 't1',
}))`
  position: relative;
  display: block;
  line-height: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}`;

export const NavLink = styled(Text).attrs(() => ({
  font: 's3',
}))`
  margin-left: -4px;
  line-height: 20px;
  cursor: pointer;
  transition: ${transitionVariables.color};
  &:hover {
    color: ${colorVariables.grey};
  }
`;

export const NavOrder = styled(Text).attrs(() => ({
  font: 's3',
}))``;

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
  color: 'grey',
}))`
  position: absolute;
  left: 0;
  top: 5px;
  transform: translate(-100%, 0);
  padding-right: 5px;
`;
