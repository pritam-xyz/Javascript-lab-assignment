// BCS354 - JavaScript Programming Lab
// Lab 7: Constructor Functions and Classes
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Constructor function
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

const student = new Student("Asha", 88);
console.log(student.name);
console.log(student.marks);


// ============ Task 2 ============
// Task 2: ES6 class
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

const book = new Book("Algorithms", 320);
console.log(book.summary());


// ============ Task 3 ============
// Task 3: Prototype method
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function () {
    return this.marks >= 40 ? "Pass" : "Fail";
};

const student = new Student("Asha", 88);
console.log(student.result());
