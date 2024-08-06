"use strict";
let personName = "hanool Aman";
//  person name to lower case
console.log(personName.toLowerCase());
//  person name to uppercase
console.log(personName.toUpperCase());
//  person name to title case
// let firstLetter:string = personName.charAt(0).toUpperCase();
// let restLetter:string = personName.slice(1).toLowerCase();
// let titleCase = firstLetter + restLetter;
// console.log(titleCase);
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
