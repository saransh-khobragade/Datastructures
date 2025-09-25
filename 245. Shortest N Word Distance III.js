/**
Given an array of strings wordsDict and two strings that already exist in the array word1 and word2, return the shortest distance between the occurrence of these two words in the list.
Note that word1 and word2 may be the same. It is guaranteed that they represent two individual words in the list.
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
*/

//FOR N WORDS(advanced)

// Returns minimum number of words BETWEEN the outermost occurrences
// of all targets (i.e., span - 1). Returns -1 if not all words present.
function minWordsBetweenThree(words, targets) {
    const targetSet = new Set(targets);
    const targetCount = {};
    let uniqueCount = 0;
    let left = 0;
    let right = 0;
    let min = Infinity;

    while (right < words.length) {
        if (targetSet.has(words[right])) {
            targetCount[words[right]] = (targetCount[words[right]] || 0) + 1;
            if (targetCount[words[right]] == 1) {
                uniqueCount += 1;
            }
        }
        while (uniqueCount == targetSet.size) {
            min = Math.min(min, right - left - 1); // words between outer occurrences

            if (targetSet.has(words[left])) {
                targetCount[words[left]] -= 1;
                if (targetCount[words[left]] == 0) {
                    uniqueCount -= 1;
                }
            }
            left += 1;
        }
        right += 1;
    }
    return min === Infinity ? -1 : Math.max(0, min);
}

// Example:
console.log(
    minWordsBetweenThree(
        ["a", "x", "b", "y", "c", "b", "z", "a"],
        ["a", "b", "c"]
    )
); // span indexes could be [0,2,4] => span 4 => between = 3. But later maybe smaller -> prints minimal between.
