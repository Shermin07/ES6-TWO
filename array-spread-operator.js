const arr = [1, 2, 3, 4, 5];
// dui ta tei push hobe copy korle
const arr2 = arr;
arr.push(10);

console.log(arr);
console.log(arr2);


// solve korte chaile
const arr3 = [...arr];
arr3.push(100);

console.log(arr);
console.log(arr3);