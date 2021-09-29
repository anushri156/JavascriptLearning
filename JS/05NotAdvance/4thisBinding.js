const anushri={
    firstName:"Anushri",
    lastName:"Saxena",
    getInfo:function(){
    console.log(`Name is ${this.firstName} ${this.lastName}`);
    }
};


anushri.getInfo();

const dj={
    firstName:"dj",
    lastName:"Rocks",
    
    };


anushri.getInfo.bind(dj)();
anushri.getInfo.call(dj);

//bind will bind this keyword to dj,if we want to use properties/function of an object in another object
//we can use bind , but bind only gives reference , we need to explicitly call it
//call : also calls that method