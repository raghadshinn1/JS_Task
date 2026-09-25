let cash = 1000;
let currentLiabilities = 500;
let cashFlowRatio = cash / currentLiabilities;
console.log("1. Cash flow ratio:", cashFlowRatio);

let revenues = 1000;
let expenses = 500;
let netIncome = revenues - expenses;
console.log("2. Net income:", netIncome); 

let liabilities = 1000;
let equity = 500;
let totalAssets = liabilities + equity;
console.log("3. Total assets:", totalAssets); 

let profit = 1000;
let sales = 500;
let netIncomeAlt = profit * sales;
console.log("4. Net income (alt):", netIncomeAlt); 

let numbers = [7, 9, 2];
let average = (numbers[0] + numbers[1] + numbers[2]) / numbers.length;
console.log("5. Average:", average); 

let price = 150;
let discountRate = 0.30; 
let finalPrice = price * (1 - discountRate);
console.log("6. Discount price:", finalPrice); 

let age = 20;
let isValidAge = age > 18 && age < 30;
console.log("7. age limit check:", isValidAge); 

let base = 2;
let exponent = 3;
let exponentialResult = base ** exponent;
console.log("8. Exponential:", exponentialResult); 

let num1 = 10;
let num2 = 4;
let remainderResult = num1 % num2;
console.log("9. Remainder:", remainderResult); 

let str= "Welcome to Orange";
console.log(str.toUpperCase());
console.log(str.slice(8,10));
console.log(str.replace("to", "from"));
console.log(str.toLowerCase());
console.log(str.length);
let words= str.split(" ");
words[words.length-1]=`"${words[words.length - 1]}"`;
let output = words.join(" ");
console.log(output);

console.log(str.concat (), "Jordan");
let arr = ["Coding", "Academy", "By", "Orange"];
let arr1 = [...arr];
arr1.push("Jordan");
console.log(arr1);
let arr2 = arr.slice(0, 2);
console.log(arr2);
let arr3 = [...arr];
arr3.unshift("Welcome", "To");
console.log(arr3);
let arr4 = [...arr];

arr4.shift(); 
console.log(arr4);

let strOutput = arr.join(" ");
console.log(strOutput);

console.log(arr);

let arr7 = [arr[0], arr[arr.length - 1]];
console.log(arr7);


let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop(); 
console.log(vegetables);


fruit.shift();
console.log(fruit);


let orangeIndex = fruit.indexOf("orange"); 

fruit.push(orangeIndex);

let vegLength = vegetables.length; 

vegetables.push(vegLength); 

let food = fruit.concat(vegetables); 

food.splice(4, 2); 

food.reverse(); 

let foodStr = food.toString(); 

console.log(foodStr);


let birthYear = 2000;
let currentYear = new Date().getFullYear();
let Age_1 = currentYear - birthYear;

if (Age_1 > 60) {
  console.log("You may join the seniors’ program.");
} else if (Age_1 > 30) {
  console.log("You are not eligible. You may join other programs.");
} else if (Age_1 >= 18 && Age_1 <= 30) {
  console.log("You are eligible. Start your application.");
} else {
  console.log("You may join the kids' program.");
}

function switchCase(str) {
  return str.split("").map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join("");
}

function toCamelCase(str) {
  return str.split(" ").map((word, index) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join("");
}

function removeElement(arr, target) {
  return arr.filter(item => item !== target);
}

function checkOddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function findLargest(a, b) {
  return a > b ? a : b;
}

function checkTriangle(a, b, c) {
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}

function isInRange(num, min, max) {
  return num >= min && num <= max;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(" Even numbers twice ");
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
let j = 2;
while (j <= 50) {
  console.log(j);
  j += 2;
}

console.log("Even numbers twice with single for loop");
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
  console.log(i);
}

console.log("One even loop, one odd loop ");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log("Even:", i);
}
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) console.log("Odd:", i);
}

console.log(" Fizz-Buzz Loop ");
let resultArr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    resultArr.push("FizzBuzz");
  } else if (i % 3 === 0) {
    resultArr.push("Fizz");
  } else if (i % 5 === 0) {
    resultArr.push("Buzz");
  } else {
    resultArr.push(i);
  }
}
console.log(resultArr.join(", "));

function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}
console.log(" fizzBuzz function call");
console.log(fizzBuzz(1));   
console.log(fizzBuzz(15));  

function recursiveFizzBuzz(current, max) {
  if (current > max) return;
  console.log(fizzBuzz(current));
  recursiveFizzBuzz(current + 1, max);
}
console.log("Recursive Fizz-Buzz (1 to 15)");
recursiveFizzBuzz(1, 15);

function getBanknotes(amount, denominations) {
  let result = [];
  for (let denom of denominations) {
    while (amount >= denom) {
      result.push(denom);
      amount -= denom;
    }
  }
  return result;
}
console.log("Banknotes");
console.log(getBanknotes(57, [25, 10, 5, 1])); 



function countChar(str, char) {
  return str.toLowerCase().split(char.toLowerCase()).length - 1;
}

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
}

for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

let strVar = 'CodingAcademy';
let arrVar = [7, 500, 'KH404', 'black', 36];

for (let i = 0; i < arrVar.length; i++) {
  console.log(arrVar[i]);
}

for (let i = strVar.length - 1; i >= 0; i--) {
  console.log(strVar[i]);
}

let numbersArr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];
for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] % 2 === 0) {
    evens.push(numbersArr[i]);
  } else {
    odds.push(numbersArr[i]);
  }
}

function generateMeals(numMeals) {
  let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
  let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
  let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
  let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
  let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
  let meals = [];
  for (let i = 0; i < numMeals; i++) {
    let meal = {
      protein: proteins[Math.floor(Math.random() * proteins.length)],
      grain: grains[Math.floor(Math.random() * grains.length)],
      vegetable: vegetables[Math.floor(Math.random() * vegetables.length)],
      beverage: beverages[Math.floor(Math.random() * beverages.length)],
      dessert: desserts[Math.floor(Math.random() * desserts.length)]
    };
    meals.push(meal);
  }
  return meals;
}

function getObjectProperties(obj) {
  return Object.keys(obj);
}

function getObjectPropertiesCount(obj) {
  return Object.keys(obj).length;
}

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function uppercaseObjectValues(obj) {
  let copiedObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      copiedObj[key] = obj[key].toUpperCase();
    } else {
      copiedObj[key] = obj[key];
    }
  }
  return copiedObj;
}

function filterNonNullProperties(obj) {
  let filteredObj = {};
  for (let key in obj) {
    if (obj[key] !== null) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}

function getSortedPropertyNames(obj) {
  return Object.keys(obj).sort();
}