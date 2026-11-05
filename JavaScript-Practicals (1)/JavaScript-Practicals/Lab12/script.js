// BCS354 - JavaScript Programming Lab
// Lab 12: Callbacks and Higher-Order Functions
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: applyTwice
function applyTwice(callback, value) {
    return callback(callback(value));
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));


// ============ Task 2 ============
// Task 2: Callback formatter
function formatMarks(marks, callback) {
    return callback(marks);
}

console.log(formatMarks(76, marks => "Marks: " + marks + "/100"));


// ============ Task 3 ============
// Task 3: repeatAction
function repeatAction(times, action) {
    for (let round = 1; round <= times; round++) {
        action(round);
    }
}

repeatAction(3, round => console.log("Round " + round));
