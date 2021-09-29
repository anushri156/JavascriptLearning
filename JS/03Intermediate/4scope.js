//  consider a kid needs an ice cream, he can eat his own icecream if he does not have it will ask parents ,
//  if parents dont give will ask grandparents. But parents cannot ask for ice cream to kids they can ask to their parents.
//  Similar is the functionality of Scope.  Check by commenting uncomenting line 10, 15

var name="Anushri";

console.log(`Line number 7 ${name}`);

function sayName(){
   // var name="Suhani";
    console.log(`Line number 11 ${name}`);

    sayName2();
    function sayName2(){
      //  var name="Naini";
        console.log(`Line number 16 ${name}`);

    }
}

sayName();

