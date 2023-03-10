/*******************************************
Array Examples:
********************************************

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

console.log(coffeeOrder + "\n");

coffeeOrder[1] = "Ann - Vanilla latte";

console.log(coffeeOrder.length + "\n");

coffeeOrder.push("Donna - Espresso");

console.log(coffeeOrder.join("\n") + "\n");

coffeeOrder.pop();

console.log(coffeeOrder.join("\n") + "\n");

*******************************************/

console.log(`
Array Activity 1
`);

const favouriteSongs = [
    "1e&a - Ben Sloan, Madeline Kenney",
    "You Might Think He Loves You For Your Money But I Know What He Really Loves You For It's Your Brand New Leopardskin Pillbox Hat - Death Grips",
    "Dean Town - Vulfpeck"
];

console.log(favouriteSongs.join("\n\n") + "\n\n");

favouriteSongs.push("WEIGHT OFF - BadBadNotGood", "Wonderful Christmas Time - Paul McCartney");

console.log(favouriteSongs.join("\n\n") + "\n\n");

favouriteSongs.pop();

console.log(favouriteSongs.join("\n\n") + "\n\n");

console.log(`
Array Activity 2
`);

const arrAnim = [
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
];

console.log(arrAnim.join("")); // print the starting array

for (const f in arrAnim) {
    arrAnim.push(arrAnim.shift()); // removes the first element from the array and adds it to the end
    console.log(arrAnim.join(""));
}

/************************************************
Loop Examples:
*************************************************

let favDrinks = [
    "Coke",
    "Fanta",
    "Tonic",
    "Red Bull"
];

// with arrays: slow, lame, not repeatable ******

console.log("The array version:");
console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);
console.log(favDrinks[3] + "\n");

// the chad loop ********************************

console.log("The loop version:");
for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}

// embedding if into for ************************

let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        multiplesTwo.push(i);
    }
}

console.log(`
The numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.
`);

// while loops! *********************************

let age = 14;

while (age < 18) {
    console.log(`age ${age}: not a responsible adult`);
    age++;
}

console.log(`age ${age}: congratulations you may now die for your country
`);

// random suit picker, as long as it's spades ***

let suit = ["Diamond", "Spade", "Heart", "Club"];
let currentSuit = "Club";
console.log(`The starting suit is: ${currentSuit}`);

while (currentSuit !== "Spade") {
    currentSuit = suit[Math.floor(Math.random() * 4)];
    console.log(`The current suit is: ${currentSuit}`);
}
console.log("Winner!");

************************************************/

console.log(`
Loop Activity 1
`);

const favFilms = [
    "Drive",
    "Blade Runner",
    "Three Billboards Outside Ebbing Missouri",
    "Dune",
    "The Matrix"
];

favFilms.push("Lord of the Rings", "The Big Short");

console.log("Favourite films:");
for (let f of favFilms) { // when iterating through an array this is the simplest method
    console.log(`${favFilms.indexOf(f) + 1}: ${f}`);
}

console.log(`
Loop Activity 2
`);

for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random() * 49) + 1); // multiply by 49 and add 1 to make sure the value is always BETWEEN 1 and 50
}

console.log(`
Loop Activity 3
`);

for (let i = 9; i >= 0; i--) { // decrement instead of increment
    console.log(i);
}

console.log(`
Loop Activity 4
`);

const gbFilms = [
    "John Wick",
    "Eternal Sunshine of the Spotless Mind",
    "Ghostbusters",
    "Good Will Hunting"
];

for (let f of gbFilms) {
    (f === "Ghostbusters") ? console.log(`${f} - Yay it's Ghostbusters!`) : console.log(`${f} - Boo! We want Ghostbusters!`);
}

console.log(`
Loop Activity 5
`);

for (let i = 0; i < 6; i++) {
    let r = (Math.floor(Math.random() * 29) + 1);
    (r%7 === 0) ? console.log(`${r} is divisible by 7`) : console.log(`${r} is NOT divisible by 7`);
}

console.log(`
Loop Activity 6
`);

const bobsFollowers = [
    "Terry",
    "Josh",
    "Marge",
    "Dave",
];

const hannahsFollowers = [
    "Josh",
    "Harriett",
    "Eileen",
    "Dave"
];

for (let bf of bobsFollowers) {
    for (let hf of hannahsFollowers) {
        bf === hf ? console.log(`${bf} is a friend to all`) : {};
    }
}

console.log(`
Loop Activity 7
`);

/************************************************

* for loops are for iterating over set amounts of objects and performing work on them
** C-style for loops are used when iterating over a number of objects, either statically or dynamically.

** for...of loops are used when iterating over an iterable oject, such as an array

** for...in loops are used when iterating over the properies of an object


* while and do...while are both for iterating over an arbitrary amount of objects until a condition is met
** while loops are used when you only want the contained statements to be executed if the condition is true

** do...while loops are used when you want the loop to be executed at least once regardless of starting conditions

************************************************/

console.log(`
----- For loops -----

basic C style:
`);

for (let i = 1; i <= 10; i++) {
    console.log(`${i} squared is ${i ** 2}`);
}

console.log(`
for...of loop:
`);

const numberList = [1, 2, 3, 4, 8, 20, 144];

for (let n of numberList) {
    console.log(`${n} squared is ${n ** 2}`);
}

/* this implementation is probably incorrect, but it's functional *

console.log(`
for...in loop:
`);

const carObj = { 
    ford: ["mondeo", "focus"],
    toyota: ["supra", "corolla"],
    honda: ["civic"]
};

let desiredModel = "supra";

for (let c in carObj) {
    console.log(`${c} has these models available: ${carObj[c]}`);
    ( carObj[c].includes(desiredModel) ) ? console.log(`the ${desiredModel} is in stock!`) : console.log(`the ${desiredModel} is NOT in stock.`);
}

************************************************/

console.log(`

----- While loops -----

while loop:
`);

let loopConWhile = 0;
let loopConDo = 0;

while (loopConWhile < 5) {
    loopConWhile++;
    console.log(`our condition value for the first loop is ${loopConWhile}`);
    loopConDo += loopConWhile;
}

console.log(`
do...while loop:
our condition value for the second loop is ${loopConDo}
`);

do {
    console.log(`even though our do loop condition will evaluate to false, this will still execute!`);
} while (loopConDo < 10)

console.log("");