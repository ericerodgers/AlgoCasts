// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// RECURSIVE (NOT NECESSARILY BETTER):
function pyramid(n, row = 0, step = '') {
    const totalWidth = 2*n-1
    let midpoint = Math.floor(totalWidth/2)

    if (row === n) return
    if (step.length === totalWidth) {
        console.log(step);
        return pyramid(n, row + 1)
    }
    let add = ''
    if (midpoint - row <= step.length && midpoint + row >= step.length) {
        add = '#'
    } else {
        add = ' '
    }
    return pyramid(n, row, step + add)
}

module.exports = pyramid;

// ITERATIVE:
// function pyramid(n) {
//     const totalWidth = 2*n-1
//     let midpoint = Math.floor(totalWidth/2)

//     for (let row = 0; row < n; row++) {
//         let step = '';

//         for (let col = 0; col < totalWidth; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 step += '#'
//             } else {
//                 step += ' '
//             }
//         }
//         console.log(step)
//     }
// }