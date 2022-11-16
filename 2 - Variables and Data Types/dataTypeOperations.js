// String Operations

console.log("21" + "20"); // output 2120
console.log("100" + "200"); // output 100200
console.log("21" + "22"); // output 2122
console.log(`Hello` + `World!`); // output HelloWorld!
console.log("Hello" + " " + "World!"); // output Hello World!
console.log(1 + "2" + "2"); // output 122
console.log(1 + +"2" + "2"); // output 32
console.log(1 + -"1" + "2"); // output 02
console.log(+"1" + "1" + "2"); // output 112
console.log("A" - "B" + "2"); // output NaN2
console.log("A" - "B" + 2); // Output Nan

// Number Operations

console.log(21 + 20); // output 41
console.log(1 + 21 + 32);  // output 53
console.log(100 + 200); // output 300
console.log(1 - 21 + 32); // output 12
console.log(100 * 200); // output 20000
console.log(12 / 3); // output 4
console.log(12 % 2); // output 0
console.log(12 / 0); // output Infinity
console.log(12 / NaN); // output NaN
console.log(12 / null); // output NaN
console.log(12 / undefined); // output 12
console.log(12 + 0); // output 12
console.log(12 + NaN); // output NaN
console.log(12 + null); // output 12
console.log(12 + undefined); // output NaN

// Boolean Operations

console.log(!true); // output false
console.log(!false); // output true 
console.log(false == "0"); // output true
console.log(false === "0"); // output false
console.log(false + 21); // output 21
console.log(true + 12); // output 13
console.log(false - 21); // output -21
console.log(true - 12); // output -11
console.log(true + "true"); // output  truetrue
console.log("true" + true); // output truetrue
console.log(false + "false"); // output falsefalse
console.log("false" + false); // output falsefalse

// TypeOf Operations

console.log(typeof NaN); // output number
console.log(typeof "phone"); // output string
console.log(typeof null); // output object
console.log(typeof undefined); // output undefined
console.log(typeof "abc"); // output string
console.log(typeof "Hello World!"); // output string
console.log(typeof -0); // output number
console.log(typeof 4); // output number
console.log(typeof { name: "Avneet" }); // output object
console.log(typeof typeof 1); // output string
