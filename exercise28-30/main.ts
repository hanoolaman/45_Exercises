//                   28. Stages of Life: 
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 
// and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let personAge = 24;

if(personAge < 2){
console.log("The person is a baby");
}
if(personAge >=2 && personAge < 4){
    console.log("The person is a toddler");
}
else if(personAge >=4 && personAge < 13){
    console.log("The person is a kid");
} 
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager");
}
 else if (personAge >= 20 && personAge< 65) {
    console.log("The person is an adult");
} 
else if (personAge >= 65) {
    console.log("The person is an elder");
};


//                               29. Favorite Fruit: 
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
// such as You really like bananas!



let favorite_fruits = ["Mango","Grapes","Pomegranate"]
if(favorite_fruits.includes("Mango")){
    console.log("I really like Mangoes");
}
if(favorite_fruits.includes("Grapes")){
    console.log("I really like Grapes");
}
if(favorite_fruits.includes("Pomegranate")){
    console.log("I really like Pomegranate");
}
if(favorite_fruits.includes("Apple")){
    console.log("I really like Apple");
}
if(favorite_fruits.includes("Banana")){
    console.log("I really like Banana");
};


//                            30. Hello Admin: 
// Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they log in to a website. Loop through the array, and 
// print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames = ["Hanool","Admin","Salma","Hafsa","Alina"]

usernames.forEach(usernames => {
    if(usernames === "Admin"){
    console.log(`Hello ${usernames}, would you like to see a status report?`);
}
else{
    console.log(`Hello ${usernames}, thank you for logging in again.`);
}
});
