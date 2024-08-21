// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const str = n.toString();
    const rev = str.split('').reverse().join('');
    const num = parseInt(rev)
    return n < 0 ? 0 - num : num;
}

module.exports = reverseInt;
