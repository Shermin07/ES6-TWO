const students =[
{name : "mim", id: "ph01"}, 
{name : "mimi", id: "ph02"}, 
{name : "momi", id: "ph02"}, 
        
    
]
// map
const result = students.map( s => s.id);
console.log(result);  //  [ 'ph01', 'ph02', 'ph02' ]
const result2 = students.map( s => s.name);
console.log(result2);

// foeEach
const result1 = students.forEach( s => s.id);
console.log(result1);

 // filter
 const result3 = students.filter( x => x.id === "ph02");
 console.log(result3);

 // find
 const result4 = students.find( x => x.id === "ph02");
 console.log(result4);

 // reduce

 



