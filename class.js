class Product {

    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    country = "Bangladesh";
    speak(talk){
        console.log(`i am talking about  ${talk}`);
    }
}
const result = new Product("bangladesh", "green");
console.log(result);
result.speak("hello world")

// 2;;

class Teacher{
    lecturer(){
        console.log("sir is teaching");
    }

    constructor(name, subject, address){
        this.name = name;
        this.subject = subject;
        this.address = address;
    }
}
const tapanSir = new Teacher("Tapan", "Physics", "Dhaka");
console.log(tapanSir);