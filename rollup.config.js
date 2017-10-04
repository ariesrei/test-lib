
// rollup.config.js
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import browsersync from 'rollup-plugin-browsersync';

export default {
  input: 'src/main.js',
  output: {
    file: 'app/js/bundle.js',
    format: 'cjs'
  },
  plugins: [
  	json(),
  	babel({
  		exclude: 'node_modules/**',
  	}),
  	commonjs(),
  	resolve({
  		jsnext: true,
  		main: true,
  		browser: true
  	}),
    browsersync({
      server: 'app',
      browser: ["google chrome", "firefox"],
      open: false,
      files: ["./*.css", "./*.js", "./app/*.html"]
    }),
  ],
};