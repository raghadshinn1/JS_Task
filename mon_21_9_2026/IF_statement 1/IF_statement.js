let age1 = 27;
if (age1 > 18) {
  console.log("You are an adult");
}

let num = 4;
if (num % 2 === 0) {
  console.log("The number is even");
}

let char = "a";
if (/^[a-zA-Z]$/.test(char)) {
  console.log("It's a letter");
}

let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

let x = 5;
if (x > 0) {
  console.log("x is a positive number");
}

let z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

let age2 = 30;
if (age2 >= 18 && age2 <= 65) {
  console.log("You are of working age");
}

let color = "red";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

function isValidNumber(value) {
  if (!isNaN(value)) {
    return value + " is a valid number";
  } else {
    return value + " is not a number";
  }
}