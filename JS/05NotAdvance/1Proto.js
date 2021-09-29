//creating prototype: functional way of creating objects

//used when need to access object more than once eg: more than one user signup

var User= function(firstName, courseCount){

    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=function(){

        console.log(`${this.firstName} has enrolled for ${this.courseCount} courses`);
    };
};

var anushri= User("anushri",4);  //undefined because it was a regular fn call, this referes to window object
console.log(anushri);

var anushri=new  User("anushri",4);  //new keyword makes a prototype of object, now this will refer to the object
console.log(anushri);
var suhani=new User("suhani",8);
console.log(suhani);


//using proto:can create getters setters outside object, new keyword will access it
User.prototype.getFirstName= function ()
{
    console.log (`firstname is ${this.firstName}`)
};

var anushri=new User("anushri",2);
anushri.getCourseCount();

if(anushri.hasOwnProperty("firstName")){// hasOwnProperty:determines whether object has that property or not
anushri.getFirstName();
}
