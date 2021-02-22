import { createGlobalStyle } from 'styled-components';

import optimize from 'THEME/optimize';

export const GlobalStyle = createGlobalStyle`
  [x-out-of-boundaries] {
    display: none;
  }  

  ${optimize};
  
  .fade-enter,
  .fade-exit {
    position: absolute;
    top: 0;
    left: 0;
    transition: .3s ease opacity, .3s ease transform;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateX(30px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    z-index: 1;
  }
  
  @keyframes animation-in {
    0% {
      transform: translateY(70px) scale(0.95);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes animation-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(70px) scale(0.95);
      opacity: 0;
    }
  }
`;

export default GlobalStyle;
