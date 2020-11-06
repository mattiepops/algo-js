const readlineSync = require('readline-sync');

// first way to do it but without functions
// var a = x1 - x2;
// var b = y1 - y2;

// var c = Math.sqrt( a*a + b*b )


function diff (num1, num2) {
    if (num1 > num2) {
      return (num1 - num2);
    } else {
      return (num2 - num1);
    }
  };
  
  function calcDist (x1, y1, x2, y2) {
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX,  2) + Math.pow(deltaY, 2));
    return (dist);
  };

let a1 = readlineSync.question("Enter value of x1: ");
let b1 = readlineSync.question("Enter value of y1: ");
let a2 = readlineSync.question("Enter value of x2: ");
let b2 = readlineSync.question("Enter value of y2: ");

  console.log(calcDist(a1, b1, a2, b2));


