// Regular expressions

// Return if specific word present
const txt = "The rain in Spain Spainish 01 ";
const pattern1 = /\bSpai\w+/;
const match1 = txt.match(pattern1);
if (match1) {
    console.log(match1[0]);
    console.log(match1.index, match1.index + match1[0].length);
}
console.log("------------");

// Return if digits
const pattern2 = /\d+/;
const match2 = txt.match(pattern2);
if (match2) {
    console.log(match2[0]);
    console.log(match2.index, match2.index + match2[0].length);
}
console.log("------------");

// Return all occurrences
const txt2 = "The rain in Spain";
const pattern3 = /ai/g;
const matches3 = txt2.match(pattern3);
if (matches3) {
    matches3.forEach(match => console.log(match));
}
console.log("------------");

// Regex patterns:
// \b - Returns a match where the specified characters are at the beginning or at the end of a word
// \d - Returns a match where the string contains digits (numbers from 0-9)
// \s - Returns a match where the string contains a white space character
// \w - Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character) 