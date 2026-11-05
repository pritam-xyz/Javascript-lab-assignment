// BCS354 - JavaScript Programming Lab
// Lab 13: Reduce, Some, Every and Map
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: reduce
const prices = [120, 45, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);


// ============ Task 2 ============
// Task 2: some and every
const marks = [72, 85, 30, 90];
console.log(marks.some(mark => mark < 40));
console.log(marks.every(mark => mark >= 35));


// ============ Task 3 ============
// Task 3: map without changing original array
const marks = [72, 85, 64, 90];
const increasedMarks = marks.map(mark => mark + 5);

console.log(increasedMarks);
console.log(marks);
