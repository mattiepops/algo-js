const readlineSync = require('readline-sync');

let n = readlineSync.question("What is your favourite number? ");


while ( n != 42)  {
    console.log("Are you sure?");
    n = readlineSync.question("What is your favourite number? ");
}
    console.log("AWESOME CHOICE!");
