const numbers = [10, 11, 23, 32, 44, 22, 16, 65, 23];

let sum = 0;
const mapresult = numbers.map( x => {
    sum = sum + x ;
})
console.log(sum);

// 2::
const nums = [2, 2, 3]

let multiply = 1;
const result2 = nums.map( x => {
    multiply = multiply * x ;
})
console.log( multiply);

// 3:::
const result = numbers.map ( (x) => x*5);
console.log(result);