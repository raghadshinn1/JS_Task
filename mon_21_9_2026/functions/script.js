function findSmallest(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findSmallest([30, 45, 60, 7]));

function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(AlphabeticalOrder('hello'));

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(8));

function oddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddOrEven(9));

function addUp(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(8));

function minMaxLengthAverage(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }
    let length = arr.length;
    let average = sum / length;
    return [min, max, length, average];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
