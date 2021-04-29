"use strict";

var fname = "nithin";
var fname = "nikhil";

console.log("fname", fname);

var lname = "shabadhu";
// let lname="shabadhu";

console.log("lname", lname);

var address = "warangal";
console.log("address", address);

//let and const are block scoped
var fullName = "Nithin Shabadhu";
var firstName = void 0;
if (fullName) {
    firstName = fullName.split(' ');
    console.log(firstName);
}
console.log(firstName);
