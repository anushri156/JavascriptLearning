var red=document.querySelector(".red");
var blue=document.querySelector(".blue");
var violet=document.querySelector(".violet");
var center=document.querySelector(".center")

//getComputedStyle method is used to get any style property of a window object
console.log(window.getComputedStyle(red).background);


var getBgColor= (selectedElement) =>{
    return (window.getComputedStyle(selectedElement).backgroundColor);
}

//console.log(getBgColor(blue));


//new program

// var color=getBgColor(red);

// red.addEventListener("click",() =>{
//     center.style.background=color;
// })


//call back fn
const changeColor=(element,color)=>{
    return element.addEventListener("click",() =>{
        center.style.background=color;
    })
    
};

changeColor(red,getBgColor(red));

