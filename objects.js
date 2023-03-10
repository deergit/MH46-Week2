/************************************************
Object examples:
************************************************/

// mini activity
const me = {
    name: "Josh",
    age: 27,
    tired: true
};

console.log(`
My name is ${me.name}
I am ${me.age} years old (christ)
${me.tired ? "I am tired" : "I'm feeling funky fresh"}
`);

// Example 1:

let offer = "none";
let time = Math.floor((Math.random() * 2400) + 1);

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],

    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry, no offer"
};

console.log(`the time is ${time.toString().padStart(4, "0").slice(0, 2)}`);
if (time < 1100) {
    offer = cafe.breakfastOffer;
    console.log(`\n${offer}\n`);
} else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(`\n${offer}\n`);
} else {
    offer = cafe.noOffer;
    console.log(`\n${offer}\n`);
}