//for each is basically a method on array
//its a kind of call back fn
//it iterates over each value of array
const states=[
    "MP",
    "UP",
    12,
    "Hayana"
];

states.forEach((s) => (console.log(s)));

//states.forEach(s => console.log(s));


//print only string
states.forEach( s => 
    {
    if(typeof s === "string")  
    console.log(s)

    }
    
    )