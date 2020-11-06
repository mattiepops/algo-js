// function factorial(a) {
//     if (a == 0 || a == 1) {
//         return 1;
//     }
//     var result = a;

//     while (a > 1) {
//         result = result * (a - 1);
//         a = a - 1;
//     }

//     return result
// }
// console.log(factorial(5));

// the code above is the old way of doing this exercise, the better way is using regressive in the code below.

function factorial(a) {
    if (a == 0 || a == 1) {
        return 1;
    }
    return a * factorial(a - 1);
}

console.log(factorial(6));