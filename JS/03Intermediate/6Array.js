//shit unshift pop push , convert string into array using from

var countries=["India", "USA", "Nepal"];
console.log(countries);

var states= new Array("MP", "Maharashtra"," Rajasthan");
console.log(states);
console.log(states[0]);

states[0]="Punjab";
console.log(states);

//push pop 
states.pop();
console.log(states);
states.push("UP");
console.log(states)

//unshift - add at beginning
states.unshift("Sikkim")
console.log(states);


//shift - delete from beginning
states.shift();
console.log(states)

