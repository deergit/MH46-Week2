/************************************************
Object examples:
*************************************************

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
    noOffer: "Sorry, no offer",

    // old method
    // openCafe: ()=>{
    //     return "Come on in!";
    // },
    // closeCafe: ()=>{
    //     return "We are closed, come back tomorrow!";
    // }

    // ES6: New method!
    openCafe() {
        if (this.hasSpecialOffers) {
            return "Come and enjoy one of our special offers!";
        } else {
            return "Come on in!";
        }
    },
    closeCafe() {
        return "We are closed, come back tomorrow!";
    }
};

console.log(`hasSpecialOffers is true:
${cafe.openCafe()}
${cafe.closeCafe()}
`);

cafe.hasSpecialOffers = false;

console.log(`hasSpecialOffers is false:
${cafe.openCafe()}
${cafe.closeCafe()}
`);

// Example 2:

let time = Math.floor((Math.random() * 2400) + 1);
console.log(`the time is ${time.toString().padStart(4, "0").slice(0, 2)}:${time.toString().padStart(4, "0").slice(2, 4)}${time < 1200 ? "am" : "pm"}`); // good idea in theory but I don't think 12:85pm is a valid time
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
    if (d === "Saturday" || d === "Sunday") {
        alarm = alarmObj.weekendAlarm;
    } else {
        alarm = alarmObj.weekdayAlarm;
    }
    console.log(`Today is ${d}, ${alarm}`);
}

// alternatively:

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

*************************************************
Object Activities:
************************************************/

console.log(`
Object Activity 1
`);

const person = {
    name: "Josh",
    age: 27,
    tired: true,

    sayHi() {
        return `Hello, my name is ${this.name}!`
    }
};

console.log(person.sayHi());

person.name = "Terry";

console.log(person.sayHi());

console.log(`
Object Activity 2
`);

const pet = {
    name: "muffins",
    typeOfPet: "cat",
    age: 4,
    color: "white",

    eat() {
        return `${this.name} the ${this.typeOfPet} is eating`;
    },
    
    drink() {
        return `${this.name} the ${this.typeOfPet} is drinking`;
    }
};

console.log(`
${pet.eat()}
${pet.drink()}
`);

console.log(`
Object Activity 3
`);

const coffeeShop = {
    branch: "Southport",
    drinks: [
        {
            name: "Cappuccino",
            price: 4.5,
        },
        {
            name: "Latte",
            price: 5.0,
        },
        {
            name: "Filter Coffee",
            price: 2.0,
        },
        {
            name: "Tea",
            price: 2.5,
        },
        {
            name: "Hot Chocolate",
            price: 3.0,
        }
    ],

    foods: [
        {
            name: "Croissant",
            price: 3,
        },
        {
            name: "Muffin",
            price: 4,
        },
        {
            name: "Toast",
            price: 2,
        }
    ],

    orderedDrinks: [],
    orderedFoods: [],

    drinksOrdered() {
        let outputStr = "";
        let drinksCost = 0;

        for (let item in this.orderedDrinks) {
            outputStr = outputStr + `${this.orderedDrinks[item][0]}: £${this.orderedDrinks[item][1]}\n`;
            drinksCost = drinksCost += this.orderedDrinks[item][1];
        }
        return [`${outputStr}\nTotal cost for drinks: £${drinksCost}\n`, drinksCost];
    },

    foodOrdered() {
        let outputStr = "";
        let foodsCost = 0;

        for (let item in this.orderedFoods) {
            outputStr = outputStr + `${this.orderedFoods[item][0]}: £${this.orderedFoods[item][1]}\n`;
            foodsCost = foodsCost += this.orderedFoods[item][1];
        }
        return [`${outputStr}\nTotal cost for food: £${foodsCost}\n`, foodsCost];
    }
}

const orderItem = (name) => {
    const drink = coffeeShop.drinks.find((obj) => {
        return obj.name === name;
    });
    if (drink != undefined) { coffeeShop.orderedDrinks.push([drink.name, drink.price]); return }

    const food = coffeeShop.foods.find((obj) => {
        return obj.name === name;
    });
    if (food != undefined) { coffeeShop.orderedFoods.push([food.name, food.price]); return }
}

orderItem("Tea");
orderItem("Latte");
orderItem("Croissant");
orderItem("Hot Chocolate");

coffeeShop.drinks.push({ name: "Chai Latte", price: 6.25 });

orderItem("Chai Latte");
orderItem();
orderItem("");
orderItem("this item does not exist");
orderItem("Toast");

console.log(`
Drinks ordered:
${coffeeShop.drinksOrdered()[0]}
Food ordered:
${coffeeShop.foodOrdered()[0]}

Total order cost: £${coffeeShop.drinksOrdered()[1] + coffeeShop.foodOrdered()[1]}
`);
