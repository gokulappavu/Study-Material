// fundamentals

// Variables
// Use `let` to declare a variable with block scope
let name = 'Alice';
console.log(name); // Output: Alice

// Use `const` to declare a constant variable, which cannot be reassigned
const age = 30;
console.log(age); // Output: 30

// Data Types
// Strings
let greeting = 'Hello, world!';
console.log(greeting);          // Output: Hello, world!

// Numbers
let count = 42;
console.log(count);             // Output: 42

// Booleans
let isJavaScriptFun = true;
console.log(isJavaScriptFun);   // Output: true

// Undefined
let notDefined;
console.log(notDefined);        // Output: undefined

// Null
let emptyValue = null;
console.log(emptyValue);        // Output: null

// Objects
// Objects are collections of key-value pairs
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};
console.log(person.firstName); // Output: John

// Arrays
// Arrays are ordered collections of values
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]); // Output: banana

// Functions
// Functions are blocks of code designed to perform a particular task
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: Hello, Alice!

// Arrow Functions
// Arrow functions provide a shorter syntax for writing functions
const add = (a, b) => a + b;
console.log(add(5, 7)); // Output: 12

// Conditionals
// `if` statement
let number = 10;
if (number > 5) {
    console.log('Number is greater than 5'); // Output: Number is greater than 5
}

// `else` statement
if (number > 15) {
    console.log('Number is greater than 15');
} else {
    console.log('Number is 15 or less'); // Output: Number is 15 or less
}

// `switch` statement
let day = 3;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday'); // Output: Wednesday
        break;
    default:
        console.log('Weekend');
}

// Loops
// `for` loop
for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2
}

// `while` loop
let j = 0;
while (j < 3) {
    console.log(j); // Output: 0, 1, 2
    j++;
}

// `do...while` loop
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2
    k++;
} while (k < 3);

// Error Handling
// `try...catch` block
try {
    let result = riskyOperation(); // Assuming this function is not defined
} catch (error) {
    console.log('An error occurred:', error.message);
}

// Object Methods
// Adding methods to objects
let car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine() {
        console.log('Engine started');
    }
};
car.startEngine(); // Output: Engine started

// ES6 Classes
// Classes are a syntactical sugar over JavaScript's existing prototype-based inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.

// Template Literals
// Template literals allow embedded expressions and multi-line strings
let user = 'Bob';
let message = `Hello, ${user}! Welcome to JavaScript.`;
console.log(message); // Output: Hello, Bob! Welcome to JavaScript.

// Destructuring Assignment
// Destructuring allows unpacking values from arrays or properties from objects
let [first, second] = ['one', 'two'];
console.log(first, second); // Output: one two

let { title, author } = { title: 'JavaScript Basics', author: 'John Doe' };
console.log(title, author); // Output: JavaScript Basics John Doe

// Spread and Rest Operators
// Spread operator `...` expands an iterable into more elements
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]

// Rest parameter `...` collects multiple elements into an array
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// Async Programming
// Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise resolved');
    } else {
        reject('Promise rejected');
    }
});
promise.then(result => console.log(result)) // Output: Promise resolved
       .catch(error => console.log(error));

// Async/Await
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
fetchData();
