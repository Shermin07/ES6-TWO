// problem::1
const myArray = [1, 3, 5, 7, 9];
  let newArray = [];
for( let arr of myArray){
    const newArr = arr + 1;
    newArray.push(newArr);

   
}
console.log(newArray); // ans: [ 2, 4, 6, 8, 10 ]

// and:: array.map():: 1

const evenNumbers = array => 
        array +1
           

const result1 = myArray.map(evenNumbers);
console.log(result1);

// and:: array.map():: 2


const result2 = myArray.map(n => n+1);
console.log(result1);


// problem:: 2

const numbers = [33, 50, 79, 90, 101, 30];

const filterdNumbres = numbers.filter(x => x%10 === 0) ;
console.log(filterdNumbres);// [ 50, 90, 30 ]

const filterdNumbres1 = numbers.find(x => x%10 === 0) ;
console.log(filterdNumbres1); // 50


// problem:: 3

const instructor = [
    {name : "nodi", age : 28, position : "senior"},
    {name : "nadia", age : 26, position : "junior"},
    {name : "sadia", age : 30, position : "senior"}

]

const seniorInstructor = instructor.filter(x => x.position === "senior");
const output3 = seniorInstructor.map( names => names.name);
console.log(output3);


// problem:: 4
const people = [
    {name : "Meena", age : 20 },
    {name : "Rinana", age : 15 },
    {name : "sonia", age : 22 },
];

const output4 = people.reduce((p, c )  => p + c.age ,0)
console.log(output4)

