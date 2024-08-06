//                   43. Unchanged Magicians: 
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.


let magicians =  ["Ali","Usman","Zafar","Hassan"];

function show_magicians1(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians:string[]){
    return magicians.map(magiciansName => `The Great ${magiciansName}`)
}

let magicianName_copy = magicians.slice();

let great_magicians_copy = make_great(magicianName_copy);

console.log("\nOriginal Array\n");
show_magicians1(magicians)
console.log("\nCopied Array\n");
show_magicians1(great_magicians_copy)




//                           44. Sandwiches: 
// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time.


function make_sandwich(...items: string[]) {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(item => {
        console.log(`-${item}`);
    });
    console.log("\nYour sandwich is ready!\n");
}

make_sandwich("Butter", "Cheese", "Lettuce");
make_sandwich("Chicken", "Tomato", "Onion", "Mayo");
make_sandwich("Egg", "tomato","Butter");






// 45. Cars: 
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly.



function make_car(manufacturer : string ,model: string, ...options: any) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        let [key,value] = option.split(":")
        car [key.trim()] = value.trim()
    });

    return car;
}

let car1 = make_car('Toyota', 'Corolla', { color: 'blue', year: 2020 });
let car2 = make_car('Ford', 'Mustang', { color: 'red', convertible: true });
let car3 = make_car('Tesla', 'Model S', { color: 'white', autopilot: true, battery: '100 kWh' });

console.log(car1);
console.log(car2);
console.log(car3);

