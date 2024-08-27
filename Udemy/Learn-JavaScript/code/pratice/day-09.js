// Regex-Methods

// Regular Expressions
let regex = /hello/i;

// test(string)
console.log(regex.test('Hello world')); // Output: true

// exec(string)
console.log(regex.exec('Hello world')); // Output: ['Hello']

// match(regex)
console.log('Hello world'.match(regex)); // Output: ['Hello']

// replace(searchValue, newValue)
console.log('Hello world'.replace(regex, 'Hi')); // Output: Hi world

// search(regex)
console.log('Hello world'.search(regex)); // Output: 0 (index of match)

// split(separator)
console.log('Hello world'.split(' ')); // Output: ['Hello', 'world']
