import styled from 'styled-components';

import { colorVariables, commonVariables, transitionVariables } from 'THEME/variables';

export const Module = styled.div`
  height: fit-content;
  cursor: pointer;
  padding: 24px;
  margin-top: 16px;
  background: ${colorVariables.white};
  box-shadow: ${commonVariables.boxShadow};
  border-radius: ${commonVariables.borderRadius};
  > :last-child {
    padding-bottom: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > :last-child {
    transition: ${transitionVariables.transform};
    transform: ${({ open }) => (open ? 'rotate(180deg)' : '')};
  }
`;

export const SubTitle = styled.div`
  padding: 24px 0;
`;
