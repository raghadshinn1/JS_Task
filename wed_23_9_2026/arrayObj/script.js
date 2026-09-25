function printObjectValues(obj) {
    console.log(obj.name, obj.age, obj.gender);
}
printObjectValues({ name: "Adam", age: 25, gender: "male" });


function addProperty(obj, key, value) {
    obj[key] = value; 
    return obj;
}
let person = { name: "Adam", age: 25 };
console.log(addProperty(person, "gender", "male"));


function getProperty(obj, key) {
    return obj[key]; 
}
console.log(getProperty({ name: "Adam", age: 25 }, "name"));



function printArrayWithForEach(arr) {
    arr.forEach(element => console.log(element));
}
printArrayWithForEach([1, 2, 3, 4, 5]);


function sortStrings(arr) {
    return arr.sort();
}
console.log(sortStrings(["apple", "banana", "cherry"]));



function reverseArray(arr) {
    return arr.slice().reverse(); 
}
console.log(reverseArray(["apple", "banana", "cherry"]));

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

function sliceArray(arr, start, end) {
    return arr.slice(start, end);
}
console.log(sliceArray([1, 2, 3, 4, 5, 6], 2, 4));

function spliceArray(arr) {
    arr.splice(3, 1); 
    return arr;
}

function getIndexOfElement(arr, elem) {
    return arr.indexOf(elem);
}

function convertToString(arr) {
    return arr.join(',');
}

function convertToArray(str) {
    return str.split(',');
}


function getArrayLength(arr) {
    return arr.length;
}
console.log(getArrayLength([1, 2, 3, 4, 5]));


function iterateWithForOf(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
iterateWithForOf([1, 2, 3, 4, 5]);


function checkIsArray(obj) {
    return Array.isArray(obj);
}
console.log(checkIsArray([1, 2, 3, 4, 5]));