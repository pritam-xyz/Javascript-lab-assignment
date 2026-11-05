// BCS354 - JavaScript Programming Lab
// Lab 9: DOM, Validation, Storage and Quiz
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Change heading on button click
// Run this script from an HTML page containing #heading and #changeButton.
const heading = document.getElementById("heading");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function () {
    heading.textContent = "Button clicked";
});


// ============ Task 2 ============
// Task 2: Form validation
function validateForm(name) {
    const errors = [];

    if (name.trim() === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));


// ============ Task 3 ============
// Task 3: Save text in localStorage
// Run this script from an HTML page containing #note and #saveButton.
const noteBox = document.getElementById("note");
const saveButton = document.getElementById("saveButton");

noteBox.value = localStorage.getItem("note") || "";

saveButton.addEventListener("click", function () {
    localStorage.setItem("note", noteBox.value);
});


// ============ Task 4 ============
// Task 4: Simple quiz
// Run this script from an HTML page containing #answer and #checkButton.
const answer = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", function () {
    result.textContent = answer.value === "5" ? "Correct" : "Try again";
});
