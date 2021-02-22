export const colorVariables = {
  primary: '#74C79D',
  black: '#333333',
  white: '#ffffff',
  danger: '#FF2051',
};

export const fontFamilyVariables = {
  bold: '"mont-bold", sans-serif',
  semi: '"mont-semi", sans-serif',
  reg: '"mont-reg", sans-serif',
  light: '"mont-light", sans-serif',
};

export const fontVariables = {
  h1: {
    weight: fontFamilyVariables.bold,
    size: '32px',
    lineHeight: '48px',
    spacing: '-1px',
  },
  h2: {
    weight: fontFamilyVariables.bold,
    size: '24px',
    lineHeight: '32px',
    spacing: '0',
  },
  h3: {
    weight: fontFamilyVariables.bold,
    size: '16px',
    lineHeight: '24px',
    spacing: '0',
  },
  t1: {
    weight: fontFamilyVariables.reg,
    size: '16px',
    lineHeight: '32px',
    spacing: '0',
  },
};

export const transitionVariables = {
  color: 'color 0.3s',
  borderColor: 'border-color 0.3s',
  bgColor: 'background-color 0.3s',
  opacity: 'opacity 0.3s',
  transform: 'transform 0.3s',
  padding: 'padding 0.3s',
};

export const sizeVariables = {
  container: {
    sm: '860px',
    md: '1140px',
    lg: '1440px',
  },
};

export const commonVariables = {
  borderRadius: '8px',
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.16)',
};
