export const colorVariables = {
  primary: '#74C79D',
  primaryLight: 'rgba(116, 199, 157, 0.2)',
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
    family: fontFamilyVariables.bold,
    size: '32px',
    lineHeight: '48px',
    spacing: '1px',
  },
  h2: {
    family: fontFamilyVariables.bold,
    size: '24px',
    lineHeight: '32px',
    spacing: '1px',
  },
  h3: {
    family: fontFamilyVariables.bold,
    size: '18px',
    lineHeight: '26px',
    spacing: '1px',
  },
  h4: {
    family: fontFamilyVariables.bold,
    size: '16px',
    lineHeight: '24px',
    spacing: '0',
  },
  s1: {
    family: fontFamilyVariables.semi,
    size: '16px',
    lineHeight: '32px',
    spacing: '0',
  },
  t1: {
    family: fontFamilyVariables.reg,
    size: '16px',
    lineHeight: '32px',
    spacing: '0',
  },
  t2: {
    family: fontFamilyVariables.reg,
    size: '14px',
    lineHeight: '24px',
    spacing: '0',
  },
  t3: {
    family: fontFamilyVariables.reg,
    size: '12px',
    lineHeight: '20px',
    spacing: '0',
  },
  t4: {
    family: fontFamilyVariables.reg,
    size: '10px',
    lineHeight: '16px',
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
