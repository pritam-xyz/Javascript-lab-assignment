// BCS354 - JavaScript Programming Lab
// Lab 4: Writing Functions
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Function with return value
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Asha"));


// ============ Task 2 ============
// Task 2: Arrow function
const square = number => number * number;
console.log(square(6));


// ============ Task 3 ============
// Task 3: Default parameter
function billWithTax(amount, taxRate = 0.18) {
    return amount + amount * taxRate;
}

console.log(billWithTax(100));
