let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

const arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

let sum1 = 0;
for (let i = 1; i <= 10; i++) {
    sum1 += i;
}
console.log(sum1);

const arr2 = [1, 2, 3, 4, 5];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
}
console.log(max);

const arr3 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
    sum2 += arr3[i];
}
let average = sum2 / arr3.length;
console.log(average);

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial);

let limit1 = 10;
let fib = [0, 1];
for (let i = 2; ; i++) {
    let nextNum = fib[i - 1] + fib[i - 2];
    if (nextNum > limit1) break;
    fib.push(nextNum);
}
console.log(fib.join(' '));

let limit2 = 20;
let primes = [];
for (let i = 2; i <= limit2; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}
console.log(primes.join(' '));


const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

const arrRev = [1, 2, 3, 4, 5];
for (let i = arrRev.length - 1; i >= 0; i--) {
    console.log(arrRev[i]);
}

const arrStep = [1, 2, 3, 4, 5];
let step = 2;
for (let i = 0; i < arrStep.length; i += step) {
    console.log(arrStep[i]);
}

const arrFreq = [1, 2, 1, 3, 2, 1];
let target = 1;
let count = 0;
for (let i = 0; i < arrFreq.length; i++) {
    if (arrFreq[i] === target) {
        count++;
    }
}
console.log(count);

const heros = [ 
  {name: 'Iron Man', power: 'Tech'}, 
  {name: 'Spider-Man', power: 'Spider abilities'}, 
  {name: 'Thor', power: 'Godly powers'}, 
  {name: 'Hulk', power: 'Super strength'} 
];
const newHeros = heros.map((heroObj, index) => {
    return {
        hero: heroObj.name,
        power: heroObj.power,
        id: index
    };
});
console.log(newHeros);

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function filterWords(words) {
    return words.filter(word => word.length > 7);
}
console.log(filterWords(inputWords));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumSquaredDivisibleBy5 = numbers.reduce((sum, num) => {
    if (num % 5 === 0) {
        return sum + (num * num);
    }
    return sum;
}, 0);
console.log(sumSquaredDivisibleBy5);