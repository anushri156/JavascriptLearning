// for all regular function calls, this points to window object/global object/in case of node global empty object
// eg: function abc(){

// };
// abc();  This is called regular function

// for functions called by objects , this refers to that object

//Run this code in browser also

console.log(this);

var user={
    firstname:"Anushri",
    lastName:"Saxena",
    courseCount:4,
    getCourseCount:function(){
        console.log("Line 18",this);

        function sayHello(){
            console.log("hello");
            console.log("line 21",this);//window object
        }
        sayHello();//regular function call
    }
};

user.getCourseCount();//not a regular fn call

