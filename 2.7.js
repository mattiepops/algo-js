const readlineSync = require('readline-sync');

let n = readlineSync.question("Insert a number: ");

let total = 0;

while (n-- != 0) {
    total = total + Number.parseInt(readlineSync.question("Enter a new number: "));
}
console.log(total);