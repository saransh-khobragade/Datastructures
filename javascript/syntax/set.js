let a = new Set([1, 2, 3, 4]);
let b = new Set();

b.add(4);
b.add(6);

// common element (intersection)
console.log(new Set([...a].filter(x => b.has(x))));

// diff (difference)
console.log(new Set([...a].filter(x => !b.has(x))));

let s = new Set([1, 2, 3]);  // create set from array
console.log(s);            // Set(3) {1, 2, 3}

s = new Set([1, 2, 3]);  // create set from array
console.log(s);            // Set(3) {1, 2, 3}

s = new Set('ABC');      // create set from string
console.log(s);            // Set(3) {'A', 'B', 'C'}

// converting array to set
let listitem = [1, 2, 3, 4];
s = new Set(listitem); 