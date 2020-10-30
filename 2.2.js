const readlineSync = require('readline-sync');

let min = readlineSync.question("Insert min");

let current = readlineSync.question("Insert current");

let max = readlineSync.question("Insert max");

if (min>max) {
    console.log("ERROR ERROR ERROR ERROR");
}

else if (min<current<max) {
    console.log("Congratulations, " + current + " is in between the min and max");
}
