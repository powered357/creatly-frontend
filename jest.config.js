module.exports = {
  moduleNameMapper: {
    'API(.*)$': '<rootDir>/src/api/$1',
    'CONSTANTS(.*)$': '<rootDir>/src/constants/$1',
    'STORE(.*)$': '<rootDir>/src/store/$1',
    'PAGES(.*)$': '<rootDir>/src/pages/$1',
    'THEME(.*)$': '<rootDir>/src/theme/$1',
    'COMPONENTS(.*)$': '<rootDir>/src/components/$1',
    'HOOKS(.*)$': '<rootDir>/src/hooks/$1',
    'UTILS(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
