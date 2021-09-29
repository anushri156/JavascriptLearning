//init=initializer
// If we want to call sayHello then pass init value to a variable then call that variable
function init(){

    var firstName="Anushri";
    console.log(firstName);
    function sayHello()
    {
console.log("Hello");
    }

    return sayHello;
}

var value=init();
value();


//second example
 function addition(x){
    return function (y){
         return (x-y);
     }
     
 }

 var value=addition(5);
 console.log(value(4));//x=4,y=5

 console.log(addition(7)(2));    //x=7 y=2


