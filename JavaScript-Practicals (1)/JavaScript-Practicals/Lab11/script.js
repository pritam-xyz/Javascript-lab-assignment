// BCS354 - JavaScript Programming Lab
// Lab 11: Scope and Closures
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Block scope
let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);


// ============ Task 2 ============
// Task 2: Closure counter
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());


// ============ Task 3 ============
// Task 3: Global scope
const school = "Sample College";

function showSchool() {
    console.log("Welcome to " + school);
}

showSchool();
