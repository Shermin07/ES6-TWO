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