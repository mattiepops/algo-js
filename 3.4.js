
// let arr = [4, 12, 62, 70, -10];

// let min = Math.min(...arr);

// let max = Math.max(...arr);

// Math.min.apply(Math, arr);
// Math.max.apply(Math, arr);

// console.log(Math.min.apply(Math, arr));

// console.log(Math.max.apply(Math, arr));

// i dont know how these are the same codes, but they both work the same!

let arr = [4, 12, 62, 70, -10];

let min = Math.min.apply(Math, arr);

let max = Math.max.apply(Math, arr);

console.log(min);

console.log(max);
