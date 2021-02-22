import { css } from 'styled-components';

const Fonts = css`
  @font-face {
    font-family: 'mont-bold';
    src: url('/assets/fonts/Montserrat/Montserrat-Bold.woff2') format('woff2'),
      url('/assets/fonts/Montserrat/Montserrat-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mont-light';
    src: url('/assets/fonts/Montserrat/Montserrat-Light.woff2') format('woff2'),
      url('/assets/fonts/Montserrat/Montserrat-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mont-reg';
    src: url('/assets/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2'),
      url('/assets/fonts/Montserrat/Montserrat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mont-semi';
    src: url('/assets/fonts/Montserrat/Montserrat-SemiBold.woff2') format('woff2'),
      url('/assets/fonts/Montserrat/Montserrat-SemiBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Fonts;
