// Task 1 – Create Variables
let name = "Ahmed";
let age = 25;
let isStudent = true;
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
let info = { name: "Ahmed", age: 25, city: "Karachi" };
let aboutMe;
let address = null;

// Task 2 – Update Variables
let score = 10;
score = 20;

// const pi = 3.14;
// pi = 3.15; // ❌ Error: Assignment to constant variable.
// const cannot be reassigned because it is a constant.

// Task 3 – Print Output
console.log(name);
console.log(age);
console.log(isStudent);
console.log(colors);
console.log(info);
console.log(aboutMe);
console.log(address);
console.log(score);

// Task 4 – Check Data Types
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof colors);
console.log(typeof info);
console.log(typeof aboutMe);
console.log(typeof address);

// Task 5 – Variable Naming Rules
// let 1name = "Ali";     ❌ starts with a digit
let name1 = "Ali";        // ✅

// let for = "Hello";     ❌ reserved keyword
let courseName = "Web Development"; // ✅

// let my-name = "Sara";  ❌ hyphen not allowed
let myName = "Sara";      // ✅

// let @user = "John";    ❌ special character not allowed
let user = "John";        // ✅

// let class = "A";       ❌ reserved keyword
let className = "A";      // ✅

// Print on browser
document.getElementById("val1").innerHTML = name;
document.getElementById("val2").innerHTML = age;
document.getElementById("val3").innerHTML = isStudent;
document.getElementById("val4").innerHTML = colors;
document.getElementById("val5").innerHTML = info;
document.getElementById("val6").innerHTML = aboutMe;
document.getElementById("val7").innerHTML = address;
document.getElementById("val8").innerHTML = score;

document.getElementById("typ1").innerHTML = typeof name;
document.getElementById("typ2").innerHTML = typeof age;
document.getElementById("typ3").innerHTML = typeof isStudent;
document.getElementById("typ4").innerHTML = typeof colors;
document.getElementById("typ5").innerHTML = typeof info;
document.getElementById("typ6").innerHTML = typeof aboutMe;
document.getElementById("typ7").innerHTML = typeof address;
