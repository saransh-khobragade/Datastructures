/**
⁠LinkedIn stores information such as “A is connection of B”, “B is connection of C” , “C is
connection of D” and so on. Given two names, return the minimum distance between two linkedin members. For above eg: Distance between A and C is 2.
 */
function shortestDistanceBFS(graph, start, target) {
    if (start === target) return 0;
    if (!graph.has(start) || !graph.has(target)) return -1;

    const visited = new Set([start]);
    const queue = [{ node: start, dist: 0 }];

    while (queue.length) {
        const { node, dist } = queue.shift();
        for (const x of graph.get(node)) {
            if (x === target) return dist + 1;
            if (!visited.has(x)) {
                visited.add(x);
                queue.push({ node: x, dist: dist + 1 });
            }
        }
    }
    return -1; // unreachable
}
const graph = new Map([
    ["A", new Set(["B"])],
    ["B", new Set(["A", "C", "D"])],
    ["C", new Set(["B", "E"])],
    ["D", new Set(["B"])],
    ["E", new Set(["C"])],
]);
console.log(shortestDistanceBFS(graph, "A", "C"));
