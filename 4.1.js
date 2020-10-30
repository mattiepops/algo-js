const readlineSync = require('readline-sync');

let a = readlineSync.question("Insert width size: ");

let b = readlineSync.question("Insert height size: ");

let calcSurface = (a, b) => {
    return a * b;
  }
  
console.log(calcSurface(a, b))

