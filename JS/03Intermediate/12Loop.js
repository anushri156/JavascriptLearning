//Learning break and continue and let
//continue:If we want to skip anything put continue with the condition, if condition true skip this
//break: if condition fullfills juz get out of loop, dont go to next step, if condition true break loop
//let:as soon as scope over it free ups memory
const states=[
    "Rajasthan",
    "Goa",
    "Delhi",
    "Up",
    "Mp",
    87,
    "Assam"
]

// print only string
for(let i=0;i<states.length;i++){
    if(typeof states[i] !== "string")   continue;
    console.log(states[i]);
}

//print only number
for(let i=0;i<states.length;i++){
    if(typeof states[i] === "string") continue;
    console.log(states[i])
}

//print states untill number comes
for(let i=0;i<states.length;i++){
    if(typeof states[i] === "number") break;
    console.log(states[i])
}