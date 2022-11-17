## null vs undefined

# null:

- null represents empty or unknown value in Javascript.
  e.g. const data = null;

# undefined:

- undefind represents value that is not yet assigned. That is, if variable is decalared and its value is not assigned, then value of that variable will be undefined.

e.g. let result;
console.log(result); // result is undefined

- we can also explicitly assign the value of undefined.

e.g. const result = undefined; // no quotes are needed


## DIFFERENCE between `undefined` and `null`

1. `null` is used to denote a null value and `undefined` is used to denote a value that is not yet defined.
When we define a variable to be undefined means we are trying to convey that variable does not exist
var myVar;

alert(myVar); // undefined 

In the above example, we have not assigned any value to a variable named 'myVar'. A variable 'myVar' lacks a value. So it is undefined.

When we define a variable to null then we are trying to convey that variable is empty.

You can assign null to a variable to denote that currently that variable does not have any value but it will have later on. A null means absence of a value.

Example: null
var myVar = null;

alert(myVar); // null 
In the above example, null is assigned to a variable myVar. It means we have defined a variable but have not assigned any value yet, so value is absence.

2. Difference using typeof 
typeof for undefined returns undefined and typeof for null is object.
e.g., var testVariable;
alert(testVariable); // shows undefined
alert(typeof testVariable); // shows undefined

`Null` is assignment value. It can be assigned to a variable as a repesentation of no value.
e.g., var testVar = null;
alert(testVar); // shows null
alert(typeof testVar); // shows object

3. Difference using  == vs ===

== compares values only
=== compares value and datatypes.
As datatype of null is object and undefined is undefined, Hence
null == undefined // returns true
null === undefined // returns false

4. Difference using NaN
The Number.isNaN() function return true if the passed value is of type Number and NaN (not a number) and else returns false.

Number.isNaN(2 + null) // returns false
Number.isNaN(1 + undefined) // returns true



