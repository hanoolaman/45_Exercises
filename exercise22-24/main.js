"use strict";
//                      22. Intentional Error: 
// If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error 
// before closing the program.
// let myArray: number[] = [20,45,67,86]
// console.log(myArray[2]);
// console.log(myArray[4])
// myArray[4]= 59
// console.log(myArray[4]);
// 23. Conditional Tests: 
// Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// TEST:1
// let seven = 7;
// console.log("Test 1: 7 is equal to seven");
// console.log(7 == seven);
// // TEST:2 
// let myName = "Hanool"
// console.log("\nTest 2: myName is equal to Hanool");
// console.log(myName == "Hanool");
// // TEST:3
// let four = 4;
// let nine = 9;
// console.log("\nTest 3: Four is equal to 4");
// console.log( four == 4);
// // TEST:4
// console.log("\nTest 4: 9 is greater than 4");
// console.log( 9 > 4);
// // TEST:5
// console.log("\nTest 5: four is not equal to nine");
// console.log(four !== nine);
// // TEST:6
// console.log("\nTest 6: 4 is eqaul to nine");
// console.log(4 == nine);
// // TEST:7
// console.log("\nTest 7: 9 is smaller than 4");
// console.log( nine < 4);
// // TEST:8
// let stdName = "Hanool";
// console.log("\nTest 8: stdName is eqaul to hanool");
// console.log(stdName == "hanool");
// // TEST:9
// let myArray = [12, 34, 45];
// console.log("\nTest 9: myArray length is equal to 4");
// console.log(myArray.length == 4);
// // TEST:10
// let myLang = "urdu";
// console.log("\nTest 10: myLang is Urdu");
// console.log(myLang == "Urdu");
//                24. More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following: 
// • Tests for equality and inequality with strings:
// EQUALITY:
let myName = 'Hani';
console.log("Is myName equal to Hani?");
console.log(myName == "Hani");
// INEQUALITY:
console.log("Is myName is not eqaul to Hani?");
console.log(myName != "Hani");
// • Tests using the lower case function:
console.log("Is myName equal to hani after converting to lowercase?");
console.log(myName.toLowerCase() == "hani");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
let num1 = 10;
let num2 = 7;
let num3 = 10;
// EQUALITY:
console.log("is num1 equal to 10");
console.log(num1 == 10);
// INQUALITY:
console.log("is num2 not equal to 7");
console.log(num2 != 7);
// GREATER THAN:
console.log("Is num1 greater than num2");
console.log(num1 > num2);
// LESS THAN:
console.log("Is num2 less than num1");
console.log(num2 < num1);
//greater than or equal to:
console.log("is num1 greater than or equal to num3");
console.log(num1 >= num3);
// less than or equal to:
console.log("is num1 less than or equal to num2");
console.log(num1 <= num2);
// / • Tests using "and" and "or" operators:
// using &&:
console.log("num1 is greater than num2 and num1 is not equal to num3");
console.log(num1 > num2 && num1 != num3);
console.log("num1 is less than num2 and num2 is greater than num3");
console.log(num1 > num2 && num2 < num3);
// using ||:
console.log("num1 is equal to num2 or num2 is less than num3");
console.log(num1 == num2 || num2 < num3);
let numberArray = [12, 34, 67, 23];
// • Test whether an item is in an array
console.log("is 12 in array?");
console.log(numberArray.includes(12));
console.log("is 45 in array?");
console.log(numberArray.includes(45));
// • Test whether an item is not in an array:
console.log("Is 34 not in array?");
console.log(!numberArray.includes(34));
console.log("Is 56 not in array?");
console.log(!numberArray.includes(56));
