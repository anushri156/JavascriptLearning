function getUserRole(name,role){
    switch (role) {
        case "Admin":
            return `${name} has role Admin`;
        case "CoAdmin":
            return `${name} has role CoAdmin`;
            
        default:
            return  `${name} has role User`;
    }
}

console.log(getUserRole("Anushri", "Admin"));


// second way of writing function, we can assign its value to a variable
var getUserRole=function (name,role){
    switch (role) {
        case "Admin":
            return `${name} has role Admin`;
        case "CoAdmin":
            return `${name} has role CoAdmin`;
            
        default:
            return  `${name} has role User`;
    }
}

console.log(getUserRole("Anushri", "CoAdmin"));

//third way
var getUserRole= (name,role)=>{
    switch (role) {
        case "Admin":
            return `${name} has role Admin`;
        case "CoAdmin":
            return `${name} has role CoAdmin`;
            
        default:
            return  `${name} has role User`;
    }
}

console.log(getUserRole("Anushri", "user"));
