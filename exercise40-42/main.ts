//                                       40. Album: 
// Write a function called make_album() that builds an Object describing a music album. The 
// function should take in an artist name and an album title, and it should return a Object containing 
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
// at least one new function call that includes the number of tracks on an album.


function make_album(artist: String , title:string, tracks?:number) {
    return { artist , title , tracks}
}

let album1 = make_album("Ali", "3");
let album2 = make_album("Zafar" ,"4" , 23);
let album3 = make_album("Asif", "5",);

console.log(album1);
console.log(album2);
console.log(album3);



//                                 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.


let magicians1 = ["Ali","Usman","Zafar","Hassan"];


function show_magicians(magician:string[]) {
    magicians1.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians1);




//                             42. Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified


let magicians =  ["Ali","Usman","Zafar","Hassan"];

function show_magicians1(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians:string[]){
    return magicians.map(magiciansName => `The Great ${magiciansName}`)
}
let great_magicians = make_great(magicians);
show_magicians1(great_magicians)



