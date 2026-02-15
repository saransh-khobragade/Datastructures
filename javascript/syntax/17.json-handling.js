// JSON handling

const x = '{ "name":"John", "age":30, "city":"New York"}';

// Parse JSON to object
const y = JSON.parse(x);
console.log(y.age); // 30

// Parse object to JSON
const z = JSON.stringify(y);
console.log(z); // {"name":"John","age":30,"city":"New York"}

// Reading JSON from file (Node.js)
// const fs = require('fs');
// try {
//     const data = JSON.parse(fs.readFileSync('javascript/syntax/data.json', 'utf8'));
//     console.log(data);
// } catch (error) {
//     console.log('Error reading file:', error.message);
// }

// Writing JSON to file (Node.js)
// try {
//     fs.writeFileSync('javascript/syntax/data.json', JSON.stringify(data));
// } catch (error) {
//     console.log('Error writing file:', error.message);
// }

// Pretty print JSON
// console.log(JSON.stringify(data, null, 4)); 