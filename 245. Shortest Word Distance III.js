/**
Given an array of strings wordsDict and two strings that already exist in the array word1 and word2, return the shortest distance between the occurrence of these two words in the list.
Note that word1 and word2 may be the same. It is guaranteed that they represent two individual words in the list.
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
*/
var shortestWordDistance = function (wordsDict, word1, word2) {
    let left = -1;
    let right = -1;
    let min = Infinity;
    let prev = -1;

    for (let i = 0; i < wordsDict.length; i++) {
        if (word1 != word2) {
            if (word1 == wordsDict[i]) {
                left = i;
            }
            if (word2 == wordsDict[i]) {
                right = i;
            }
            if (left > -1 && right > -1) {
                min = Math.min(min, Math.abs(right - left));
            }
        } else {
            if (word1 == wordsDict[i]) {
                if (prev != -1) {
                    min = Math.min(min, i - prev); //checking distance with last prev
                }
                prev = i; //reseting prev and curr
            }
        }
    }
    return min;
};
// console.log(
//     shortestWordDistance(
//         ["practice", "makes", "perfect", "coding", "makes", "makes", "perfect"],
//         "makes",
//         "makes"
//     )
// );

//FOR N WORDS(advanced)

// Returns minimum number of words BETWEEN the outermost occurrences
// of all targets (i.e., span - 1). Returns -1 if not all words present.
function minWordsBetweenThree(words, targets) {
    // targets: array like ["w1","w2","w3"]
    const k = targets.length;
    const last = new Map(); // word -> last index seen
    // initialize last positions as -Infinity so min calculation works only after set
    for (const t of targets) last.set(t, -Infinity);

    let bestSpan = Infinity;
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (last.has(w)) {
            last.set(w, i);
            // check if all words have been seen at least once
            let seenAll = true;
            let minIdx = Infinity,
                maxIdx = -Infinity;
            for (const t of targets) {
                const idx = last.get(t);
                if (idx === -Infinity) {
                    seenAll = false;
                    break;
                }
                if (idx < minIdx) minIdx = idx;
                if (idx > maxIdx) maxIdx = idx;
            }
            if (seenAll) {
                const span = maxIdx - minIdx; // index difference
                bestSpan = Math.min(bestSpan, span);
            }
        }
    }

    if (bestSpan === Infinity) return -1; // not all targets found
    return Math.max(0, bestSpan - 1); // number of words between outer occurrences
}

// Example:
console.log(
    minWordsBetweenThree(
        ["a", "x", "b", "y", "c", "b", "z", "a"],
        ["a", "b", "c"]
    )
); // span indexes could be [0,2,4] => span 4 => between = 3. But later maybe smaller -> prints minimal between.
