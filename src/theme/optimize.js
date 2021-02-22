import { css } from 'styled-components';

const optimize = css`
  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  html {
    height: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: default;
  }

  html|* > svg {
    transform-origin: 50% 50% 0;
  }

  body {
    height: 100%;
    min-height: 100%;
    font-size: 100%;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a {
    background: transparent;
  }

  *:focus,
  *:active,
  *:hover {
    outline: none;
  }

  pre {
    tab-size: 4;
    white-space: pre-wrap;
  }

  // prettier-ignore
  q {
    quotes: '\\201C' '\\201D' '\\2018' '\\2019';
  }

  img {
    border: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input {
    line-height: normal;
  }

  button,
  select {
    text-transform: none;
  }

  button {
    overflow: visible;
  }

  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  input[type='search'] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: none;
    padding: 0;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }

  input,
  select,
  textarea {
    border-radius: 0;
  }

  input,
  textarea {
    resize: none;
    border: 0;
  }

  [placeholder]:focus::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  ol,
  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  *:not(:root):fullscreen {
    padding: 0 !important;
  }
`;

export default optimize;
