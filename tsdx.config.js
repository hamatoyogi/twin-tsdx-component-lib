const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');
const pkg = require('./package.json');

const twindConfig = {
  // name: 'ComponentLibrary',
  extensions: ['.ts', '.tsx'],
};

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      // Automatically add peerDependencies to the `external` config
      // https://rollupjs.org/guide/en/#external
      peerDepsExternal(),

      // External modules not to include in your bundle (eg: 'lodash', 'moment' etc.)
      // https://rollupjs.org/guide/en/#external
      // external: []
      resolve({ extensions: twindConfig.extensions }),
      commonjs(),
      babel({
        extensions: twindConfig.extensions,
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      })
    );
    return config; // always return a config.
  },
};
