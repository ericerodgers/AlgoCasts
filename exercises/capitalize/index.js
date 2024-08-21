// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr = [];
    let i = 0
    while (i < str.length) {
        if (i === 0 || str[i - 1] === " ") {
            arr.push(str[i].toUpperCase())
        } else {
            arr.push(str[i])
        }
        i += 1;
    }
    return arr.join("")

    // const output = []
    // const arr = str.split(' ')
    // for (const word of arr) {
    //     output.push(word[0].toUpperCase() + word.slice(1))
    // }
    // return output.join(' ')
}

module.exports = capitalize;
