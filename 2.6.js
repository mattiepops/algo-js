const readlineSync = require('readline-sync');

let n = readlineSync.question("Add a number between 1 and 7: ");

if (n==1) {
    console.log("Monday");
}
else if (n==2) {
    console.log("Tuesday");
}
else if (n==3) {
    console.log("Wednesday");
}
else if (n==4) {
    console.log("Thursday");
}
else if (n==5) {
    console.log("FRIDAY WOOOOOO");
}
else if (n==6) {
    console.log("Saturday");
}
else if (n==7) {
    console.log("Sunday");
}

else {
    console.log("read the flipping instructions mate")
}