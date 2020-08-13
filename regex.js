'use strict'

const miPrimerRegex = new RegExp('abc');

const miSegundoReguex = /abc/

const miString = 'abcddefghijklmn'

console.log(miPrimerRegex.test(miString));
console.log(miSegundoReguex.test(miString));

const text = "Hola mundo desde mi mundo"

const miOtroregex = /mundo/gi

console.log(text.replace(miOtroregex, 'Tierra'))