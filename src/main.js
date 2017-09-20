// src/main.js
import { version } from '../package.json';
import { multiply } from '../lib/multiply';

export default function () {
  console.log('version ' + version);
}

// Run some functions from our imported modules.
const result1 = multiply(2, 4);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];
printTarget.innerText = `multiply(2, 4) => ${result1}\n\n`;
 

