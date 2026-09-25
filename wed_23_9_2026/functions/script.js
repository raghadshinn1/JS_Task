function findSmallest(arr) {
    return Math.min(...arr);
}
console.log( findSmallest([30, 45, 60, 7])); 

function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log( AlphabeticalOrder('hello')); 

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log( factorial(8)); 

function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log( oddOrEven(9)); 

function addUp(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log( addUp(8)); 

function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    const average = arr.reduce((acc, val) => acc + val, 0) / length;
    return [min, max, length, average];
}
console.log( minMaxLengthAverage([7, 13, 3, 77, 100])); 

function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log( countWords('hello from CodingAcademy!')); 

function MultiplyByLength(arr) {
    const len = arr.length;
    return arr.map(x => x * len);
}
console.log( MultiplyByLength([4, 2, 5])); 

function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}
console.log( checkEnding("CodingSchool", "Ac")); 

function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
}
console.log(doubleChar('Coding')); 

function findIndex(arr, elem) {
    return arr.indexOf(elem);
}
console.log( findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));