// Array-Methods

// Array Methods
let arr = [1, 2, 3, 4, 5];

// length
console.log(arr.length); // Output: 5

// push(element)
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// pop()
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

// shift()
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

// unshift(element)
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

// indexOf(element)
console.log(arr.indexOf(3)); // Output: 2

// slice(start, end)
console.log(arr.slice(1, 4)); // Output: [2, 3, 4]

// splice(start, deleteCount, item1, item2, ...)
arr.splice(2, 1, 8, 9);
console.log(arr); // Output: [1, 2, 8, 9, 5]

// forEach(callback)
arr.forEach(element => console.log(element)); // Output: 1 2 8 9 5

// map(callback)
let doubled = arr.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 16, 18, 10]

// filter(callback)
let evenNumbers = arr.filter(x => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 8]

// reduce(callback, initialValue)
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 25
