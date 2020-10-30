let n = [1, 2, 3, 4, 5];

let m = [100, 101, 102]; 

let x = n.reduce((a, b) => a + b, 0) / n.length;

let y = m.reduce((a, b) => a + b, 0) / m.length;

console.log(x);

console.log(y);