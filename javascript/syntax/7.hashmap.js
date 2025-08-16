// HashMap

// Blank dictionary
const dic = {};
dic["a"] = 5;
dic["b"] = 10;

// How to loop over dictionary
for (const [key, value] of Object.entries(dic)) {
    console.log(key, value);
}

for (const key of Object.keys(dic)) {
    console.log(key);
}

for (const value of Object.values(dic)) {
    console.log(value);
}

// How to check key exists in dictionary
if ('x' in dic) {
    dic['x'] += 1;
} else {
    dic['x'] = 1;
}

// Set unique but no unordered
const setItems = {
    'A': new Set(['B', 'C']),
    'B': new Set(['A', 'D', 'E']),
    'C': new Set(['A', 'F']),
    'D': new Set(['B']),
    'E': new Set(['B', 'F']),
    'F': new Set(['C', 'E'])
};
console.log(setItems);

// Dictionary key value pairs can use immutable keys mutable values
const dictionary = {
    'A': 12,
    'B': 122,
    'C': 45,
    'D': 76,
    'E': 23,
    'F': 2323
};
console.log(dictionary);

console.log(Object.keys(dictionary));
console.log(Object.values(dictionary));

// Add item or update to dictionary
dictionary['G'] = 31;
dictionary['G'] = 32;

// Loop in dict
for (const [key, value] of Object.entries(dictionary)) {
    console.log(key, value);
}

// Sorting dictionary by its values and converting to list of tuples
const sortedByValue = Object.entries(dictionary)
    .sort(([,a], [,b]) => a - b);
console.log(sortedByValue);

// Sorting dictionary by its keys and converting to list of tuples
const sortedByKey = Object.entries(dictionary)
    .sort(([a], [b]) => a.localeCompare(b));
console.log(sortedByKey);

// Complex key in dictionary using tuple (using array as key)
const d = {};
d[['a', 'b', 'c'].join(',')] = 1; // Using string representation of tuple
console.log(d); 