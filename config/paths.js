const path = require('path');

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),
  // Production build files
  build: path.resolve(__dirname, '../build'),
  // Assets files that get copied to build folder
  assets: path.resolve(__dirname, '../src/assets'),
  // Src directories for aliases
  components: path.resolve(__dirname, '../src/components'),
  store: path.resolve(__dirname, '../src/store'),
};
