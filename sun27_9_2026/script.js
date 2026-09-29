// Q3
const studentsGroup1 = ["Ahmed", "Mohamed", "Ali", "Fatma", "Sara"];
const studentsGroup2 = ["Omar", "Zainab", "Khaled", "Mariam", "Youssef"];
let allstudents = studentsGroup1.concat(studentsGroup2);

allstudents.sort();
console.log(allstudents);

allstudents.reverse();
console.log(allstudents);


let hasAhmad = allstudents.includes("Ahmed");
console.log(hasAhmad);

allstudents.forEach((student , index)=>{
    console.log(`Index ${index}: ${student}`);
});

// Q5

const product = {
    id: 101,
    name: "Laptop",
    price: 750.50,
    category: "Electronics",
    available: true
};
let JsonString = JSON.stringify(product);
console.log(JsonString);
// JSON.parse()
let JsonParse = JSON.parse(JsonString)
console.log(JsonParse);
// the original object and converted object
console.log(product);
console.log(JsonString);
// Handle invalid JSON using try...catch 
const invalidJson = '{"id": 102, name: "Invalid JSON"}';
try{
    const result = JSON.parse(invalidJson)
    console.log(result);
    
}catch(error){
    console.error("Caught an invalid JSON error ", error.message);
    
}
//  Arrow Function Transformation
const square = (num) => num*num;

const isEven = (num) => num % 2 === 0;

const calculateTotal =(products) =>{
    let total = 0;
    for (let i=0; i<products.length; i++){
        total += products[i].price;
    }
    return total;
}
const myProducts = [
    { name: "Pen", price: 5 },
    { name: "Book", price: 20 },
    { name: "Bag", price: 50 }
];
console.log("Total Price:", calculateTotal(myProducts));

const numbers = [1,2,3,4,5]
const doubleNumbers= numbers.map((num)=> num*2);
console.log("Map Result ",doubleNumbers);

const ages = [12, 18, 22, 15, 30];
const adults = ages.filter((age)=> age>= 18);
console.log("Filter Result",adults );

const scores = [10, 20, 30];
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log("Reduce Result", totalScore);

// Q10
const students = [
    { id: 1, name: "Ahmed", grade: 85 },
    { id: 2, name: "Sara", grade: 45 },
    { id: 3, name: "Mohamed", grade: 92 },
    { id: 4, name: "Fatma", grade: 70 },
    { id: 5, name: "Ali", grade: 55 }
];
const reports= students.map(student =>{
    let status = student.grade >=60 ? "pass" : "fail";
    return `
    Name: ${student.name}
    ID: ${student.id}
    Grade: ${student.grade}
    Status: ${status}
    `;
});

reports.forEach(report => console.log(report));

// const container = document.getElementById("report-container");
// if (container) {
//     container.innerHTML = reports.map(r => `<pre>${r}</pre>`).join("");
// }
// console.log(container);
// Q13
localStorage.setItem("username", "Abdullah");
localStorage.setItem("theme", "dark");

let username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("theme");
let firstKey= localStorage.key(0);
console.log(firstKey);

console.log("Total items stored:", localStorage.length);

for (let i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log (`${key}:${value}`);
    
}
localStorage.clear();
console.log(localStorage);

// med 
// Q1 
let name1 = "Jone";
console.log(name1); 

function test() {
    let x = 10;
    if (true) {
        let y = 20; 
        console.log(y); 
    }
    // console.log(y); 
}
test();


// Q2 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

function Employee(name, age, employeeId, position) {
    Person.call(this, name, age);
    this.employeeId = employeeId;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
    return `Hi, I am ${this.name}, working as a ${this.position} (ID: ${this.employeeId}).`;
};

const emp1 = new Employee("Ahmed", 28, "E001", "Developer");
const emp2 = new Employee("Sara", 25, "E002", "Designer");
const emp3 = new Employee("Ali", 32, "E003", "Manager");

console.log(emp1.greet());
console.log(emp2.greet());
console.log(emp3.greet());


// Q4
let students1 = [
    { id: 1, name: "Ahmed", grade: 80 },
    { id: 2, name: "Sara", grade: 90 },
    { id: 3, name: "Ali", grade: 70 }
];

students.splice(1, 0, { id: 4, name: "Zainab", grade: 85 });

let topStudents = students.slice(0, 2);
console.log("Top Students Slice:", topStudents);

students.sort((a, b) => b.grade - a.grade);

students.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
});


// Q8
const user = {
    userName: "Abdullah",
    email: "test@test.com",
    age: 24,
    address: { city: "Amman", country: "Jordan" }
};

const { userName: name, email, address: { city } } = user;
console.log(name, email, city);

const skills = ["JavaScript", "React", "Node.js"];
const [primarySkill, secondarySkill] = skills;
console.log(primarySkill, secondarySkill);

function createUser(name = "Guest", role = "User") {
    return { name, role };
}

console.log(createUser()); 
console.log(createUser("Mohammed", "Admin")); 


// Q11
class PersonClass {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class StudentClass extends PersonClass {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }
    getInfo() {
        return `Student - Name: ${this.name}, ID: ${this.studentId}`;
    }
}

class InstructorClass extends PersonClass {
    constructor(name, email, department) {
        super(name, email);
        this.department = department;
    }
    getInfo() {
        return `Instructor - Name: ${this.name}, Dept: ${this.department}`;
    }
}

const s1 = new StudentClass("Omar", "omar@uni.com", "S101");
const i1 = new InstructorClass("Dr. Khaled", "khaled@uni.com", "Computer Science");

console.log(s1.getInfo());
console.log(i1.getInfo());


// Q12 
// students.js:
// export const studentsList = ["Ahmed", "Sara", "Ali"];
// export function getStudentCount() { return studentsList.length; }
// export default function printWelcome() { console.log("Welcome!"); }

// // app.js:
// import printWelcome, { studentsList, getStudentCount } from './students.js';
// printWelcome();
// console.log("Students:", studentsList);



// Q14
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    saveAndDisplay();
}

function saveAndDisplay() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(`Total Tasks: ${tasks.length}`);
    console.log("Current Tasks:", tasks);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndDisplay();
}

addTask("Learn JavaScript");
addTask("Practice ES6");


// Q18 

function saveStepData(stepKey, data) {
    sessionStorage.setItem(stepKey, JSON.stringify(data));
    sessionStorage.setItem("currentStep", stepKey);
}

function restoreStep(stepKey) {
    let data = sessionStorage.getItem(stepKey);
    return data ? JSON.parse(data) : null;
}

saveStepData("step1", { fullName: "Abdullah", age: 24 });
console.log("Restored Step 1:", restoreStep("step1"));
console.log("Current Active Step in Tab:", sessionStorage.getItem("currentStep"));

 