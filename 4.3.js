const readlineSync = require('readline-sync');



function rand10() {
    return Math.round(
        Math.random() * 10
    )
}


function multiRand(n) {

    for (let i = 0; i < n; i++) {
        arr.push(rand10())
    }
    return arr;
}

let n = readlineSync.question("How many random numbers do you want? ");

arr = [];

multiRand(n);

console.log(arr);