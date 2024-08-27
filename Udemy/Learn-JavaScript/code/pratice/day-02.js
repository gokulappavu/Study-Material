// string-methods

// String Methods
let str = 'JavaScript is awesome!';

// length
console.log(str.length); // Output: 21

// charAt(index)
console.log(str.charAt(0)); // Output: J

// includes(searchString)
console.log(str.includes('awesome')); // Output: true

// indexOf(searchValue)
console.log(str.indexOf('is')); // Output: 11

// slice(beginIndex, endIndex)
console.log(str.slice(0, 10)); // Output: JavaScript

// substring(indexStart, indexEnd)
console.log(str.substring(0, 10)); // Output: JavaScript

// toLowerCase()
console.log(str.toLowerCase()); // Output: javascript is awesome!

// toUpperCase()
console.log(str.toUpperCase()); // Output: JAVASCRIPT IS AWESOME!

// trim()
let spacedStr = '   Trim me!   ';
console.log(spacedStr.trim()); // Output: Trim me!

// split(separator)
console.log(str.split(' ')); // Output: ['JavaScript', 'is', 'awesome!']

// replace(searchValue, newValue)
console.log(str.replace('awesome', 'great')); // Output: JavaScript is great!
