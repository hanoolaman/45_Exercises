"use strict";
//                            34. Pizzas: 
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
// then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
// the pizza. For each pizza you should have one line of output containing a simple statement like I like 
// pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
// output should consist of three or more lines about the kinds of pizza, you like and then an additional 
// sentence, such as I really love pizza!
let favorite_pizza = ["Tikka pizza", "Fajita pizza", "Cheese pizza"];
for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(`I like ${favorite_pizza[i]}.`);
}
;
console.log("Pizza is my favorite food.I enjoy trying different kinds of pizza.I really love pizza!");
//                                   35. Animals: 
// Think of at least three different animals that have a common characteristic. Store the names 
// of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print 
// a sentence such as Any of these animals would make a great pet.
let petAnimals = ['Dog', 'Cat', 'Rabbit'];
// Use a for loop to print the name of each animal
for (let animal of petAnimals) {
    console.log(animal);
}
// Modify the loop to print a statement about each animal
let animals = ['Dog', 'Cat', 'Parrot'];
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
;
console.log("Any of these animals would make a great pet.");
//                          36. T-Shirt: 
// Write a function called make_shirt() that accepts a size and the text of a message that should 
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
// message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}
// Call the function with example arguments
make_shirt("Large", "I love typescript");
make_shirt("Medium", "Coding is fun");
make_shirt("Small", "Good Day");
