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
    ]
};

console.log(cafe);

const me = {
    name: "Josh",
    age: 27,
    tired: true
};

console.log(me);
console.log(`
My name is ${me.name}
I am ${me.age} years old (christ)
${me.tired ? "I am tired" : "I'm feeling funky fresh"}
`);
