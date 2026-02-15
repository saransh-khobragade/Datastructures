// Regular expressions

//match and replace
console.log("water is blue".replace(/blue/g, "red")); //water is red

//Match alphabets
console.log("ABC123anc".match(/[a-zA-Z]+/g)); //[ 'ABC', 'anc' ]

//Match which are not alphabets
console.log("ABC123anc".replaceAll(/[^a-zA-Z]+/g, "")); //ABCanc

//Replace which are not alphabets more than one characters
console.log("ABC123anc".replaceAll(/[^a-zA-Z]+/g, "hello")); //ABChelloanc
