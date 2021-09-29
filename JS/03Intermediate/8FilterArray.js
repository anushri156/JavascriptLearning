//fill and filter
// fill: Replaces the array with that input value , 3 parameters: "A", start index, end index(not included)

var array1=[2,3,4,5,6,7,9];
console.log(array1.fill("A", 2, 5));



//filter : filter outs the array, callback fn
const array2=[2,5,6,8,94,4];
console.log(array2.filter((num) => (num != 94)));
