//  Rules for choosing variable names
//-----------------------------------------------------------

// 1.  Spaces are not allowed in variable names.

// var i am variable with space; // invalid variable

// 2.  Only letters, digits, underscores, and dollar signs are permitted in variable names.

// 3.  A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.

// 4.  Reserved words in javascript shouldn’t be used to name variables. e.g.  public, return are not valid variable names.

// Below are some Valid Variable Names
var number = 12;
var number12 = 12;
var valid_valiable_with_underscore = "some value";
var _another_underscore_ = "some value";
var $number = 15;

// Below are some Invalid Variable Names
var total% = 78;
var 2slow2code = "bold claim";
var function = false; // reserved keyword function
var class = "easy"; // reserved keyword class

// 5.  Case matters when it comes to variable names.
// Below 'Name' and 'name' are two different identifiers.

var name = "Honda";
var Name = "Honda";
