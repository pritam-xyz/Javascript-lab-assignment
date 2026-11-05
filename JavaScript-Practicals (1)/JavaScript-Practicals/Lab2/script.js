// BCS354 - JavaScript Programming Lab
// Lab 2: Operators, Type Conversion and a Calculator
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Arithmetic operators
const a = 17;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// ============ Task 2 ============
// Task 2: Type conversion
const textNumber = "12";
console.log(Number(textNumber) + 5);

const number = 7;
console.log(String(number) + "3");


// ============ Task 3 ============
// Task 3: Calculator using if / else if
const a = 8;
const b = 4;
let operator = "+";

if (operator === "+") {
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
}

operator = "-";

if (operator === "+") {
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
}
