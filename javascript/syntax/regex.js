// return if specific word present
let txt = "The rain in Spain Spainish 01 ";
let x = txt.match(/\bSpai\w+/);
console.log(txt);
console.log(x[0]);
console.log([x.index, x.index + x[0].length]);
console.log("------------");

// return if digits 
x = txt.match(/\d+/);
console.log(txt);
console.log(x[0]);
console.log([x.index, x.index + x[0].length]);
console.log("------------");

// Return all occurrence
txt = "The rain in Spain";
x = txt.match(/ai/g);
console.log(x);
console.log("------------");

// \b	Returns a match where the specified characters are at the beginning or at the end of a word
// \d	Returns a match where the string contains digits (numbers from 0-9)
// \s	Returns a match where the string contains a white space character
// \w	Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character) 