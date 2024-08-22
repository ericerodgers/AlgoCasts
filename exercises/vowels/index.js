// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // USING REGEX:
    const vowelsArr = str.match(/[aeiou]/gi)
    return vowelsArr ? vowelsArr.length : 0;

    // ITERATIVE:
    // const cleanStr = str.toLowerCase();
    // const vowelsObj = {"a": true, "e": true, "i": true, "o": true, "u": true}
    // // OR const allVowels = "aeiou" OR const allVowels = ["a", "e", "i", "o", "u"]
    // let numVowels = 0
    // for (const char of cleanStr) {
    //     if (vowelsObj[char]) { // OR if (allVowels.includes(char)) {
    //         numVowels += 1
    //     }
    // }
    // return numVowels
}

module.exports = vowels;
