let data = {
    sophia : {
        id : 33,
        study : [
            {
                primary :[
                    {school_name : "ABC primary school" },
                    {location : "peter burge"}
                ]
            },
            {
                secondary : [
                    {school_name : "ABC secondary school"},
                    {location : "st lorence"}
                ]
            }

        ]
    }
}

// ans::

const result1 = data.sophia.study[1].secondary[1];
console.log(result1);


// task::2

let students = {
    2222 : {
        name : "Jack",
        section : "c",
        class : "IX",
        address : {
            "building no" : 12,
            "street" : "st. johnson",
            "city" : "peterburg",
            "country" : "uk"
        }
    }
}

// answer::
const result2 = students[2222].address.city;
console.log(result2);

// task 3::

let data1 = {
    data : [
        {
            bookID :1,
            bookDetails : {
                name : "habluder adda",
                category : "xyx",
                price : "23$"
            },
            bookCategory : "Basic",
        },
        {
            bookID :2,
            bookDetails : {
                name : "gabluder adda",
                category : "abc",
                price : "40$"
            },
            bookCategory : "beginner",
        }
    ]
}

// answer::

const result3 = data1.data[0].bookDetails.name ;
console.log(result3);
const result4 = data1.data[1].bookCategory ;
console.log(result4);