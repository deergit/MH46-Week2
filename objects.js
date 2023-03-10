/************************************************
Object examples:
************************************************/

// Mini activity 1
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

console.log(`the time is ${time.toString().padStart(4, "0").slice(0, 2)}:${time.toString().padStart(4, "0").slice(2, 4)}${time < 1200 ? "am" : "pm"}`);
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

// Mini activity 2

const alarmObj = {
    weekdayAlarm: "get up at 7am",
    weekendAlarm: "no alarm needed"
}

let alarm = "";
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let d of days) {
    switch (d) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        alarm = alarmObj.weekdayAlarm;
        break;
    case "Saturday":
    case "Sunday":
        alarm = alarmObj.weekendAlarm;
        break;
    }
    console.log(`Today is ${d}, ${alarm}`);
}

// Mini activity 1: the sequel

me.favSongs = [
    "Vulfpeck - Dean Town",
    "1e&a - Ben Sloan, Madeline Kenney",
    "WEIGHT OFF - BadBadNotGood",
    "Portrait of Tracy - Jaco Pastorius",
    "Take Five - The Dave Brubeck Quartet"
]

console.log(`
My favourite songs are:
    ${me.favSongs[0]}
    ${me.favSongs[1]}
    ${me.favSongs[2]}
    ${me.favSongs[3]}
    ${me.favSongs[4]}
`);