//for of usually used for arrays
//for in usually used for objects
//both are widely used in angular

const names=["youtube", "facebook","instgram"];

for (const n of names) {
    console.log(n);
    
}
const symbols={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook"
};

for (const key in symbols) {
   // console.log(key);//only key

    console.log(`Keys ${key} has values ${symbols[key]}`);//keys and value
   
    }
