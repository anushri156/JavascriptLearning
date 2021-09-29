var num1=10;
var num2=6;
console.log(num1*num2);

var answer=num1> num2;

console.log(answer);

//program to calculate percentage of discount
var sellingPrice=100;
var listPrice=120;

var discountPer=((listPrice-sellingPrice)/listPrice)*100;

console.log(`Discount per is : ${discountPer}`);

displayDiscountInDigits=Math.round(discountPer);
console.log(`Discount per is :${displayDiscountInDigits} % off`);

//to get datatype
console.log(typeof displayDiscountInDigits);
