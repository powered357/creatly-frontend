import styled from 'styled-components';

import { colorVariables, commonVariables, transitionVariables } from 'THEME/variables';

export const Module = styled.div`
  height: fit-content;
  cursor: pointer;
  padding: 25px;
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
  font-weight: bold;
  > :last-child {
    transition: ${transitionVariables.transform};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
  }
`;

export const SubTitle = styled.div`
  padding-top: 25px;
`;

export const LessonIndex = styled.span`
  font-weight: bold;
`;
