// BCS354 - JavaScript Programming Lab
// Lab 5: Arrays, Array Methods and Nested Arrays
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Array length and first item
const marks = [72, 85, 64, 90];
console.log(marks.length);
console.log(marks[0]);


// ============ Task 2 ============
// Task 2: forEach
const subjects = ["Maths", "Science", "English"];
subjects.forEach(subject => console.log(subject));


// ============ Task 3 ============
// Task 3: filter
const marks = [72, 85, 45, 90];
const passedMarks = marks.filter(mark => mark >= 60);
console.log(passedMarks);


// ============ Task 4 ============
// Task 4: Nested arrays
const grid = [[1, 2, 3], [4, 5, 6]];
console.log(grid[1][2]);
