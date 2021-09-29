//Very Important:
//function declarartions are scanned and made available
//variable declaration are scanned and made undefined. below example demostrates it

tipper("10");
function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}




var tipper=function (a){
    var bill=parseInt(a);
    console.log(bill+5);
}

tipper("10");




//global context and excution context .There is a stack . The one which lie above will get executed

console.log(firstname);
var firstname="anushri";
console.log(firstname);

function sayHi(firstname){
    var firstname="Suhani";
console.log(`Hi ${firstname}  `);
}

sayHi();

console.log(firstname);