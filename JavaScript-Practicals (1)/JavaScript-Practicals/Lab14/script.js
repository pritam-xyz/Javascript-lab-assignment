// BCS354 - JavaScript Programming Lab
// Lab 14: Timers and Intervals
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: setTimeout with zero delay
console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 0);

console.log("End");


// ============ Task 2 ============
// Task 2: Cancel a timeout
const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");


// ============ Task 3 ============
// Task 3: setInterval
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("Tick " + count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
