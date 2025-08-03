//map
let d = ['1', '2', '3'];
let numbers = d.map(x => parseInt(x));

// Simulating input
let input = "5 10";
let [p, c] = input.split(' ').map(Number);

let l_input = "1 2 3 4 5";
let l = l_input.split(' ').map(Number);

l = [1, 2, 3, 4, 5];
let t = [[1, 2], [3, 4], [5, 6]];

console.log(l.map(x => x * 2));

console.log(t.map(x => x[1])); 