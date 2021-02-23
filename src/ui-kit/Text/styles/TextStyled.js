import styled, { css } from 'styled-components';

import { fontVariables, colorVariables } from 'THEME/variables';

export const TextStyled = styled.span`
  ${({ font, color, uppercase }) => css`
    color: ${colorVariables[color]};
    font-family: ${fontVariables[font].family};
    line-height: ${fontVariables[font].lineHeight};
    font-size: ${fontVariables[font].size};
    letter-spacing: ${fontVariables[font].spacing};
    text-transform: ${uppercase ? 'uppercase' : 'normal'};
  `}
`;
