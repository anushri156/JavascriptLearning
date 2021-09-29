//slice accepts the range in parameter , 1st position is inclusive and end position is exclusive
var names= ["anu", "suhani", "anushri", "astha"];
console.log(names.slice(1,3));// suhani, anushri

// slice deletes the element , 1st position is given and then number of elements to be deleted is given, then new elemens to be inserted are given
names.splice(1,2,"Hi","hello");
console.log(names);//anu,hi,hello,astha

