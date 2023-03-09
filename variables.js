console.log("All Around The World".charAt(7).toUpperCase());

console.log(`
Variables Activity 1
`);

let myName = "Josh";
let age = 27;
let favCol = "pink";

console.log(`My name is ${myName}, I am ${age} years old and my favourite colour is ${favCol}`);

myName = "Terry";
age = 33;
favCol = "mauve"

console.log(`My name is ${myName}, I am ${age} years old and my favourite colour is ${favCol}`);

console.log(`
Variables Activity 2
`);

let breakfast = "chicken wrap";
let lunch = "thai green curry";
let dinner = "sausage and mash";

console.log(`Today's meal schedule:
for breakfast:      ${breakfast}
for lunch:          ${lunch}
for dinner:         ${dinner}
`);

breakfast = "porridge";
lunch = "ramen";
dinner = "burger";

console.log(`Tomorrow's meal schedule:
for breakfast:      ${breakfast}
for lunch:          ${lunch}
for dinner:         ${dinner}
`);

console.log(`
Variables Activity 3
`);

let birthday = new Date("1995-08-14T12:00:00");
let daysSinceBirth = Math.ceil( ( Date.now() - birthday.getTime() ) / 86400000 );
console.log(`it has been ${daysSinceBirth} days since I was born`);

console.log(`
Variables Activity 4
`);

let space1 = "o";
let space2 = " ";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = "o";
let space7 = "o";
let space8 = " ";
let space9 = " ";

const gridStr = `
     ┃     ┃     
  ${space1}  ┃  ${space2}  ┃  ${space3}  
     ┃     ┃     
━━━━━╋━━━━━╋━━━━━
     ┃     ┃     
  ${space4}  ┃  ${space5}  ┃  ${space6}  
     ┃     ┃     
━━━━━╋━━━━━╋━━━━━
     ┃     ┃     
  ${space7}  ┃  ${space8}  ┃  ${space9}  
     ┃     ┃     
`;

console.log(gridStr);