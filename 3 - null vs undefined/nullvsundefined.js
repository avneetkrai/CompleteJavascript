Number.isNaN(2 + null); // returns false
Number.isNaN(1 + undefined); // returns true

///////////////////////////////////////////
var a = "";
console.log(typeof a); // string
console.log(a == null); //false
console.log(a == undefined); // false

///////////////////////////////////////////
var a;
console.log(a == null); //true
console.log(a == undefined); //true

///////////////////////////////////////////
var a;
console.log(a === null); //false
console.log(a === undefined); // true
