// object-methods.js

// Object Methods
let obj = {
    name: 'John',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

// keys(obj)
console.log(Object.keys(obj)); // Output: ['name', 'age', 'greet']

// values(obj)
console.log(Object.values(obj)); // Output: ['John', 30, [Function: greet]]

// entries(obj)
console.log(Object.entries(obj)); // Output: [['name', 'John'], ['age', 30], ['greet', [Function: greet]]]

// assign(target, ...sources)
let additionalInfo = { occupation: 'developer' };
let mergedObj = Object.assign({}, obj, additionalInfo);
console.log(mergedObj); // Output: { name: 'John', age: 30, greet: [Function: greet], occupation: 'developer' }

// spread operator for objects
let spreadObj = { ...obj, city: 'New York' };
console.log(spreadObj); // Output: { name: 'John', age: 30, greet: [Function: greet], city: 'New York' }
