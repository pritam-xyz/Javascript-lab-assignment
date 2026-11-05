// BCS354 - JavaScript Programming Lab
// Lab 10: Objects and Destructuring
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Object properties
const student = {
    name: "Rohan",
    roll: 12,
    marks: 78
};

console.log(student.name);
student.marks = 81;
console.log(student.marks);


// ============ Task 2 ============
// Task 2: Array destructuring
const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;

console.log(first);
console.log(second);


// ============ Task 3 ============
// Task 3: Object destructuring
const student = {
    name: "Rohan",
    roll: 12,
    marks: 81
};

const { name, roll } = student;
console.log(name);
console.log(roll);
