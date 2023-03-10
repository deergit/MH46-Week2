console.log(`
Dot Notation Activity 1
`);

const drawGrid = (colCount = 3, rowCount = 3, cellWidth = 6, cellHeight = 3, vSep = "┃", hSep = "━", xSep = "╋") => {
    for (r = 0; r < rowCount; r++) {
        for (c = 0; c < cellHeight; c++) {
            for (p = 0; p < colCount; p++) {
                process.stdout.write(" ".repeat(cellWidth) + (p < (colCount - 1) ? vSep : ""));
            }
            process.stdout.write("\n");
        }
        for (p = 0; p < colCount; p++) {
            if (r < (rowCount -1)) { process.stdout.write(hSep.repeat(cellWidth) + (p < (colCount - 1) ? xSep : "")); }
        }
        process.stdout.write("\n");
    }
}

drawGrid();

drawGrid(5, 2);

drawGrid(4, 4, 3, 2);

drawGrid(12, 4, 4, 2, "!", "-", "O");

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