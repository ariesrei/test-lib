
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
    format: 'iife'
  },
  plugins: [
  	json(),
  	babel({
  		exclude: 'node_modules/**',
      plugins: ['external-helpers']
  	}),
  	commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/
 
      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]
 
      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false
 
      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true
 
      // explicitly specify unresolvable named exports
      // (see below for more details)
      namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined
 
      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      ignore: [ 'conditional-runtime-dependency' ]
    }),
  	resolve({
  		jsnext: true,
  		main: true,
  		browser: true
  	}),
    browsersync({
      server: 'app',
      browser: ["google chrome", "firefox"],
      open: false,
      files: ["./*.js", "./app/css/*.css", "./src/*.js", "./app/*.html", "./lib/*.js"],
      ghostMode: false
    }),
  ],
};