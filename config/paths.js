const path = require('path');

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),
  // Production build files
  build: path.resolve(__dirname, '../build'),
  // Assets files that get copied to build folder
  assets: path.resolve(__dirname, '../src/assets'),
  // Src directories for aliases
  api: path.resolve(__dirname, '../src/api'),
  constants: path.resolve(__dirname, '../src/constants'),
  store: path.resolve(__dirname, '../src/store'),
  pages: path.resolve(__dirname, '../src/pages'),
  theme: path.resolve(__dirname, '../src/theme'),
  components: path.resolve(__dirname, '../src/components'),
  hooks: path.resolve(__dirname, '../src/hooks'),
  utils: path.resolve(__dirname, '../src/utils'),
};
