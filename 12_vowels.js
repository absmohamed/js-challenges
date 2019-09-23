/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Check your solution by running the tests:
npm test
*/

function vowels(string) {
    let m = string.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
    // Your code here
}
console.log(vowels("The quick brown fox"));

module.exports = {
    vowels
}