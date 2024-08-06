//                              Q16. More Guests: 
// You just found a bigger dinner table, so now more space is available. Think of three more guests 
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let guestlists:string[] = ["Aisha", "Kanwal", "Saddiqa", "Ria", "Nimra"];
console.log("Great news! I found a bigger dinner table!");

guestlists.unshift("Alina")

guestlists.splice(guestlists.length/2,0,"Salma")

guestlists.push("Safa")

guestlists.forEach(guest => {
    console.log(`${guest}, would you like to join me for dinner?`)
    }
);


                        //  Q17. Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
 

let guestLists: string[] = ["Aisha", "Kanwal", "Saddiqa", "Ria", "Nimra"];
console.log("Unfortunately, I can invite only two people for dinner.");

while (guestLists.length > 2) {
    let removedGuest = guestLists.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guestLists.forEach(guest => {
    console.log(`${guest}, you are still invited to dinner.`);
});

guestLists.splice(0, 2);
console.log(guestLists); 


//                            Q18. Seeing the World: 
// Think of at least five places in the world you’d like to visit.

// Store the locations in an array. Make sure the array is not in alphabetical order.
let myPlaces: string[] = ["Oman","Turkey","Singapore","Qatar","Bahrain","Saudi Arab"]

// • Print your array in its original order.
console.log(myPlaces);

// • Print your array in alphabetical order without modifying the actual list.
let copyOfArray = myPlaces.slice();
let sortedArray = copyOfArray.sort()
console.log(sortedArray);

// • Show that your array is still in its original order by printing it.
console.log(myPlaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let copyOfOriArray = myPlaces.slice();
let reverseOriArray = copyOfOriArray.reverse();
console.log(reverseOriArray);

// • Show that your array is still in its original order by printing it again
console.log(myPlaces);

// • Reverse the order of your list. Print the array to show that its order has changed.
let reverseOrder = myPlaces.reverse()
console.log(reverseOrder);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

let reverseAgain = myPlaces.reverse()
console.log(reverseAgain);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.

let sorted = myPlaces.sort()
console.log(sorted);


//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed
let reverseSortedOrder = sorted.reverse()
console.log(reverseSortedOrder);
 











  
  

    
 
 
