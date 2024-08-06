"use strict";
// 19. Dinner Guests: 
// Working with one of the programs from Exercises 14 through 18, print a message indicating 
// the number of people you are inviting to dinner.
let myFriends = ["Aisha", "Kanwal", "Saddiqa", "Ria", "Nimra"];
console.log(`There are ${myFriends.length} people who are invited for dinner. They are:`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i + 1}. ${myFriends[i]}`);
}
;
// 20. Think of something you could store in an array. For example, you could make a list of mountains, 
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
// containing these items.
let programmingLang = ["Python", "JavaScript", "Java", "C++", "Typescript"];
console.log("List of Programming Languages:");
programmingLang.forEach((languages) => {
    console.log(languages);
});
// 21. They think of something you could store in a TypeScript Object. Write a program that creates 
// Objects containing these items.
let ticketDetails = {
    eventName: "ExpoCenter",
    date: "8-6-2024",
    price: 100,
    hallNumber: "02"
};
console.log(ticketDetails);
