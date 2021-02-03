const { resolve } = require('path');

module.exports = {
  twin: {
    config: resolve(__dirname, '../../', 'tailwind.config.js'),
    preset: 'styled-components',
    autoCssProp: true,
    hasSuggestions: true,
    includeClassNames: true,
  },
};
