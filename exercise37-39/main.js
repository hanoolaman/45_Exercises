"use strict";
//                             37. Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.
function make_shirt(size = "Large", message = "I love typescript.") {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Coding is fun");
//                                 38. Cities: 
// Write a function called describe_city() that accepts the name of a city and its country. The 
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
;
// Call the function for three different cities
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Dubai", "UAE");
//                                        39. City Names: 
// Write a function called city_country() that takes in the name of a city and its country. The 
// function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least 
// three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Pishawar", "Pakistan"));
