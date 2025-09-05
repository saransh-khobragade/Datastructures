// Type casting

const a = parseInt("1");
const b = parseFloat("4.2");
const c = String(2);
const d = Array.from({length: 9}, (_, i) => i + 1);
const e = [...d]; // tuple equivalent
const f = new Set(d);
const g = {name: "John", age: 30};

console.log(a, b, c, d, e, f, g); 