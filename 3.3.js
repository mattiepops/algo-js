var a = [1, 3, "red"];
var aClone = [];

a.forEach(function(x) {
    aClone.push(x)
})

console.log(aClone)


// another way to do it but more complex:

// numbers = [1, 2, 3];
// numbersCopy = [...numbers];

// numbersCopy.push(4);
// console.log(numbers, numbersCopy);