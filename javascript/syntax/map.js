// map
let d = ['1', '2', '3'];
let numbers = d.map(x => parseInt(x));

// p,c = map(int,input().split()) - equivalent in JavaScript
// let [p, c] = prompt().split(' ').map(Number);

// l = list(map(int,input().split())) - equivalent in JavaScript
// let l = prompt().split(' ').map(Number);

let l = [1, 2, 3, 4, 5];
let t = [[1, 2], [3, 4], [5, 6]];

console.log(l.map(x => x * 2));

console.log(t.map(x => x[1])); 