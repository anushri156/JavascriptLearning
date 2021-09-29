//this refers to the variables of current object

var user ={
    firstName:"Anushri",
    lastName:"saxena",
    role:"Admin",
    loggedInFromFacebook:true,
    courseList:[],
    buyCourse :function(courseName){
        this.courseList.push(courseName)
    },
    getCourse:function(){
        return `${this.firstName} has enrolled for ${this.courseList.length} number of courses, It has lastname ${this.lastName}, role ${this.role}`
    }
};

var courseList=true;
user.buyCourse("Python");

console.log(user.getCourse());
