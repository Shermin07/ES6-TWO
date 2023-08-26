// arrow function:::

const arrowFunction = (x, y) => {
   x + y ;
}
const result = arrowFunction(5, 12);
console.log(result);


// spread perator:::

const {age, z, ...rest} = {
    x : 2,
    y : 5, 
    z : 3,
    name : "rima",
    age : 29
}
console.log(age, z, rest)


//
const [x, y, ...others] = [12, 11, 12, 21, 33, 44, 55];

console.log(x,y, others);

