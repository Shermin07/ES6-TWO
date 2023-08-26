const numbers = [50, 60, 11, 23, 55, 65, 70, 72, 80, 84, 71];

const result = numbers.filter( x => x > 70 || x < 60);
console.log(result);

//getting odd numbers;;

const result1 = numbers.filter( x => x % 2 === 1);
console.log(result);

//getting even numbers;;

const result2 = numbers.filter( x => x % 2 === 0);
console.log(result2);

const names = ["rioma", "golapi", "koli", "daliaa", "kakoli"];
const result3 = names.filter( x => x.length % 2 === 1);
console.log(result3);