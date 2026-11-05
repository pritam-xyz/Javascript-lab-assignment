// BCS354 - JavaScript Programming Lab
// Lab 3: Conditions and Loops
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Grade
const marks = 72;

if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// ============ Task 2 ============
// Task 2: for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ============ Task 3 ============
// Task 3: while loop total
let total = 0;
let number = 1;

while (total <= 20) {
    total += number;
    number++;
}

console.log(total);
