// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    for (const char of str) {
        if (obj[char]) {
            obj[char] += 1
        } else [
            obj[char] = 1
        ]
    }
    let max = 0;
    let maxChar = '';
    for (const char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            maxChar = char;
        }
    }
    return maxChar
}

module.exports = maxChar;
