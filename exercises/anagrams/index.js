// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB)


    // const cleanA = stringA.replace(/[\s\p{P}]/gu, '').toLowerCase();
    // const cleanB = stringB.replace(/[\s\p{P}]/gu, '').toLowerCase();
    // if (cleanA.length !== cleanB.length) return false;
    // const newA = cleanA.split("").sort().join("")
    // const newB = cleanB.split("").sort().join("")
    // if (newA !== newB) return false
    // return true;



    // const cleanA = stringA.replace(/[\s\p{P}]/gu, '').toLowerCase();
    // const cleanB = stringB.replace(/[\s\p{P}]/gu, '').toLowerCase();
    // if (cleanA.length !== cleanB.length) return false;
    // const charObjA = {};
    // const charObjB = {};
    // for (let i = 0; i < cleanA.length; i++) {
    //     charObjA[cleanA[i]] = charObjA[cleanA[i]] + 1 || 1;
    //     charObjB[cleanB[i]] = charObjB[cleanB[i]] + 1 || 1;
    // }
    // for (const [key, val] of Object.entries(charObjA)) {
    //     if (charObjB[key] !== val) {
    //         return false
    //     }
    // }
    // return true;
}

const cleanStr = (str) => {
    return str.replace(/[\s\p{P}]/gu, '').toLowerCase().split("").sort().join("")
}

module.exports = anagrams;
