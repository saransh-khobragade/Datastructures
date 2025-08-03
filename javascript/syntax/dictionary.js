// blank dictionary
let dic = {};
dic["a"] = 5;
dic["b"] = 10;

// how to loop over dictionary
for (let [x, y] of Object.entries(dic)) {
    console.log(x, y);
}

for (let x of Object.keys(dic)) {
    console.log(x);
}

for (let y of Object.values(dic)) {
    console.log(y);
}

// how to check key exists in dictionary
if ('x' in dic) {
    dic['x'] += 1;
} else {
    dic['x'] = 1;
}

// Set unique but no unordered
let setItems = {
    'A': new Set(['B', 'C']),
    'B': new Set(['A', 'D', 'E']),
    'C': new Set(['A', 'F']),
    'D': new Set(['B']),
    'E': new Set(['B', 'F']),
    'F': new Set(['C', 'E'])
};
console.log(setItems);

// Dictionary key value pairs can use immutable keys mutable values
let dictionary = {
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

// add item or update to dictionary
dictionary['G'] = 31;
dictionary = { ...dictionary, 'G': 32 };

// loop in dict
for (let [x, y] of Object.entries(dictionary)) {
    console.log(x, y);
}

// sorting dictionary by its values and converting to list to tuple
console.log(Object.entries(dictionary).sort((a, b) => a[1] - b[1]));

// sorting dictionary by its keys and converting to list to tuple
console.log(Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])));

// complex key in dictionary using tuple (JavaScript doesn't have tuples, using array as key)
let d = {};
d[["a", "b", "c"]] = 1;
console.log(d); 