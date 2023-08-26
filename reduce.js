const arr = [1, 2, 3, 4];
// addition with 0 initial value
const result = arr.reduce( (previous, current)=> previous
 + current, 0);
 console.log(result);

// addition with 2 initial value
const result1 = arr.reduce( (previous, current)=> previous
 + current, 2);
 console.log(result1);

// multiplication with 0 initial value
const result3 = arr.reduce( (previous, current)=> previous
 * current, 0);
 console.log(result3);

 // multiplication with 1 or another initial value, 0 is not allowed for multiply
 const result4 = arr.reduce( (previous, current)=> previous
 * current, 1);
 console.log(result4);