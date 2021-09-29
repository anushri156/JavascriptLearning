const uId=12345;
var firstName= "Anushri";
var lastName="Saxena";
var email="anushri@gmail.com";
var contactNo=12345;
var IsLoggedInFromGoogle= true;

console.log("unique Id",uId);
console.log("FirstName is "+ firstName);
console.log('LastName is', lastName);

//prefer this below method
console.log(
    `User with unique Id:${uId}
    has Name: ${firstName} ${lastName}
    has email :${email}
    `
);
