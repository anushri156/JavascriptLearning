// setTimeout(function,millisecond):It means the time after which everythingbresumes . break time eg:interval time
//whenver time out happens nobody does anything , after that is over everything resumes

// setInterval(function,millisecond):Time for which the game will continue eg: 15mins, during that keep pn doing task


var counter=document.querySelector(".counter");//output: counter = <h1 class="counter ">1000</h1>, counter.innerText=1000
var followers=document.querySelector(".followers");


let count=1;
setInterval(() => {
if(count<1000){
count=count+1;
counter.innerHTML=count;
}

},1);

setTimeout(() =>{
    followers.innerHTML="followers on Instagram";

}

,3000)
