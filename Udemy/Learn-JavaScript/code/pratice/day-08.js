// Json-Methods

// JSON Methods
let jsonString = '{"name":"Alice","age":25}';

// parse(text)
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // Output: { name: 'Alice', age: 25 }

// stringify(value, replacer, space)
let stringified = JSON.stringify(parsedObj, null, 2);
console.log(stringified); // Output: pretty-printed JSON string
