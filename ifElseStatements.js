console.log(`
If/Else Activity 1
`);

const ageCheck = (age, country) => {
    if ((age >= 18 && country === "UK") || (age >= 21 && country === "US")) {
        return "Yes I can serve you";
    } else if ((age < 18 && country === "UK") || (age < 21 && country === "US")) {
        return "You aren't old enough";
    } else {
        return "We have no data about the legal drinking age in your country";
    }
}

console.log(ageCheck(19, "UK"));
console.log(ageCheck(21, "US"));
console.log(ageCheck(16, "UK"));
console.log(ageCheck(4, "US"));
console.log(ageCheck(18, "Japan"));
console.log(`
If/Else Activity 2
`);

const toppingChecker = (topping) => {
    switch (topping) {
        case "pepperoni":
        case "ham":
        case "pineapple":
        case "mushrooms":
            return `I like having ${topping} on my pizza!`;
        case "grapes":
        case "raw egg":
        case "cardboard":
        case "evil":
            return `I do not like ${topping} on my pizza`;
        default:
            return `Please select a valid topping`;
    }
}

console.log(toppingChecker("ham"));
console.log(toppingChecker("mushrooms"));
console.log(toppingChecker("grapes"));
console.log(toppingChecker("potatoes"));

console.log(`
If/Else Activity 3
`);

const passLengthChecker = (password) => {
    if (password.length < 8) {
        return "The password is too short";
    } else {
        return password;
    }
}

console.log(passLengthChecker("MultipleHorses"));
console.log(passLengthChecker("nice"));

console.log(`
If/Else Activity 4
`);

const notFizzBuzz = (num) => {
    if (num%3 === 0 || num%5 === 0) {
        return `The number ${num} is divisible by 3 or 5! (Fizz!)`;
    } else {
        return `The number ${num} is NOT divisible by 3 or 5! (BUZZ!)`;
    }
}

console.log(notFizzBuzz(6));
console.log(notFizzBuzz(10));
console.log(notFizzBuzz(11));
console.log(notFizzBuzz(192));
console.log(notFizzBuzz(30));

// I just looked at the next activity and realised that *that* one was fizzbuzz, my bad

console.log(`
If/Else Activity 5
`);

const fizzBuzz = (num) => {
    if (num%3 === 0 && num%5 === 0) {
        return "FizzBuzz!";
    } else if (num%3 === 0 || num%5 === 0) {
        return "Fizz!";
    } else {
        return "Buzz!";
    }
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(11));
console.log(fizzBuzz(192));
console.log(fizzBuzz(30));

console.log(`
If/Else Activity 6
`);

const palindromeChecker = (num) => {
    let rNum = num.toString().split("").reverse().join("");
    if (num.toString() === rNum) {
        return true;
    } else {
        return false;
    }
}

let num = 10001;
console.log(`Is the number ${num} a palindrome: ${palindromeChecker(num)}`);
num = 12345;
console.log(`Is the number ${num} a palindrome: ${palindromeChecker(num)}`);
num = 123454321;
console.log(`Is the number ${num} a palindrome: ${palindromeChecker(num)}`);
num = 11221;
console.log(`Is the number ${num} a palindrome: ${palindromeChecker(num)}`);
num = 112211;
console.log(`Is the number ${num} a palindrome: ${palindromeChecker(num)}`);

console.log(`
If/Else Activity 7
`);

const schedulePrinter = (time, placeOfWork, townOfHome) => {
    if (time >= 0 && time < 8 || time >= 18 && time < 24) {
        return `at ${time} I am at home in ${townOfHome}`
    } else if (time >= 8 && time < 9 || time >= 17 && time < 18) {
        return `at ${time} I am commuting to work at ${((time < 12) ? placeOfWork : townOfHome)}`
    } else if (time >= 9 && time < 17) {
        return `at ${time} I am working at ${placeOfWork}`
    }
}

const placeOfWork = "CodeNation";
const townOfHome = "Chester";

console.log(schedulePrinter(0, placeOfWork, townOfHome));
console.log(schedulePrinter(1, placeOfWork, townOfHome));
console.log(schedulePrinter(2, placeOfWork, townOfHome));
console.log(schedulePrinter(3, placeOfWork, townOfHome));
console.log(schedulePrinter(4, placeOfWork, townOfHome));
console.log(schedulePrinter(5, placeOfWork, townOfHome));
console.log(schedulePrinter(6, placeOfWork, townOfHome));
console.log(schedulePrinter(7, placeOfWork, townOfHome));
console.log(schedulePrinter(8, placeOfWork, townOfHome));
console.log(schedulePrinter(9, placeOfWork, townOfHome));
console.log(schedulePrinter(10, placeOfWork, townOfHome));
console.log(schedulePrinter(11, placeOfWork, townOfHome));
console.log(schedulePrinter(12, placeOfWork, townOfHome));
console.log(schedulePrinter(13, placeOfWork, townOfHome));
console.log(schedulePrinter(14, placeOfWork, townOfHome));
console.log(schedulePrinter(15, placeOfWork, townOfHome));
console.log(schedulePrinter(16, placeOfWork, townOfHome));
console.log(schedulePrinter(17, placeOfWork, townOfHome));
console.log(schedulePrinter(18, placeOfWork, townOfHome));
console.log(schedulePrinter(19, placeOfWork, townOfHome));
console.log(schedulePrinter(20, placeOfWork, townOfHome));
console.log(schedulePrinter(21, placeOfWork, townOfHome));
console.log(schedulePrinter(22, placeOfWork, townOfHome));
console.log(schedulePrinter(23, placeOfWork, townOfHome));

console.log(`
If/Else Activity 8
`);

const lastVowel = (str) => {
    let vowels = ["a","e","i","o","u"];
    return `The last vowel is at position ${Math.max.apply(null, vowels.map(c => str.lastIndexOf(c)))} out of ${str.length}`;
}

console.log(lastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"));
console.log(lastVowel("ajkrngjksdjvklsdjkvsdurhgjusdrhgsdhrguhdyugdryuvhjdhdujhvsrhgsudghukldgudhrjdnkigjsdrkgjsdkirjg"));

console.log(`
If/Else Activity 9
`);

const firstLast = (str) => {
    return `the first letter of the string is ${(str.charAt(0) === str.charAt(str.length-1)) ? "" : "not "}the same as the last`;
}

console.log(firstLast("refer"));
console.log(firstLast("jeremy"));

console.log(`
If/Else Activity 10
`);

const modSum = (num1, num2) => {
    return ((num1 + num2)%2 === 0) ? num1+num2 : num1*num2 ;
}

console.log(modSum(9,13));
console.log(modSum(2,2));
console.log(modSum(4,13));
console.log(modSum(9,2));
console.log(modSum(102,3));