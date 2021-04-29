var fname="nithin";
var fname="nikhil";

console.log("fname",fname);

let lname="shabadhu";
// let lname="shabadhu";

console.log("lname",lname);

const address="warangal";
console.log("address",address);

//let and const are block scoped
const fullName="Nithin Shabadhu";
let firstName;
if(fullName){
    firstName=fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);