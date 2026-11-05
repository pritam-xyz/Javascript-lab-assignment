// BCS354 - JavaScript Programming Lab
// Lab 15: Promises and async/await with Local Data
// Name: Pritam Kumar | Roll No.: BCS2025432
// Each task is separated below. Run the file with: node script.js


// ============ Task 1 ============
// Task 1: Promise resolves for valid marks
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(80)
    .then(value => console.log(value))
    .catch(error => console.log(error.message));


// ============ Task 2 ============
// Task 2: Promise rejects for invalid marks
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .then(value => console.log(value))
    .catch(error => console.log(error.message));


// ============ Task 3 ============
// Task 3: async/await with try/catch
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));
        await checkMarks(-5);
    } catch (error) {
        console.log("Caught: " + error.message);
    }
}

run();


// ============ Task 4 ============
// Task 4: Promise with local user data
function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ]);
        }, 100);
    });
}

async function showUsers() {
    const users = await getUsers();
    users.forEach(user => console.log(user.name));
}

showUsers();
