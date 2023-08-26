const numbers = [10, 11, 23, 32, 44, 22, 16, 65, 23];
let sum = 0;
const mapresult = numbers.map( x => {
    sum = sum + x ;
})
console.log(sum);

const result = numbers.map ( x => x*5);
console.log(result);