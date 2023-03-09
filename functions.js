/************************************************
Function Examples
*************************************************

Example 1:

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true
    }
}

pressGrindBeans();
pressGrindBeans();
pressGrindBeans();

Example 2:

let accNumber1 = 50449921;

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300, accNumber1);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);

Example 3:

const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7, 3);
console.log(addUp(2, 5));

Example 4:

function square(number) {
    return number * number;
}

square(5);
console.log(square(7));

/* Alternate declarations of functions:

*   const square = function(number) {
*       return number * number;
*   }
*   
*   const square = (number) => {
*       return number * number;
*   }

Example 5:

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
}

const getFarenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}

console.log(`The temperature is ${getFarenheit(15)}°F`);

************************************************/

console.log(`
Function activity 1:
`);

/*
function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
*/

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));
console.log(factorial(9));
console.log(factorial(3));

console.log(`
Function activity 2:
`);

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Order ${orderCount + 1}: Pizza with ${topping1} & ${topping2}`);
    orderCount++;
}

takeOrder("pineapple", "ham");
takeOrder("ham", "mushroom");
takeOrder("mushroom", "chicken");

console.log(`
Function activity 3:
`);

const pinNo = 1234; // for security reasons, please contact the programmer to change your pin
let balance = 150;

const checkPin = (pinIn) => {
    return ((pinIn === pinNo) ? true : false);
}

const checkFunds = (amount) => {
    return ((amount <= balance) ? true : false);
}

const updateBalance = (amount) => {
    if (balance - amount > 0) {balance = balance - amount};
}

const cashMachine = (pinIn, amount) => {
    if (!checkPin(pinIn)) {
        console.log("incorrect pin - please try again");
    } else if ((!checkFunds(amount))) {
        console.log(`insufficient balance in account: £${balance}`);
    } else {
        console.log(`dispensing £${amount} - your remaining balance is £${balance - amount}`);
        updateBalance(amount);
    }
}

cashMachine(1234, 100);
cashMachine(1233, 100);
cashMachine(1234, 1000);
cashMachine(1111, 1111);
cashMachine(1234, 25);