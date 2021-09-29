var isEven= function(element){
    // if(element % 2===0)
    // return true;
    // else 
    // false;

    return element%2===0;
}

console.log(isEven(3));

//arrow fn
var isEven= (element) =>{
    
return element%2===0;
}

console.log(isEven(2));

//every checks each element of array returns true if all are true else false
console.log([2,4,9,8].every(isEven));

//call back fn
console.log([2,7,6,8].every((e) => { 
return e%2===0;
}))

//call back fn without curly brackets and return
console.log([2,4,6,8].every((e) => (e%2===0)))

