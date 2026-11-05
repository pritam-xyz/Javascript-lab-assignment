// BCS354 - JavaScript Programming Lab
// Lab 6: JSON Text
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Object to JSON
const student = {
    name: "Rohan",
    marks: [70, 80]
};

console.log(JSON.stringify(student));


// ============ Task 2 ============
// Task 2: JSON to object
const jsonText = '{"city":"Pune","pin":411001}';
const cityData = JSON.parse(jsonText);
console.log(cityData.city);


// ============ Task 3 ============
// Task 3: Catch invalid JSON
const invalidText = "{name: Rohan}";

try {
    JSON.parse(invalidText);
} catch (error) {
    console.log("Invalid JSON");
}
