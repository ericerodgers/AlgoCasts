// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RECURSIVE (NOT NECESSARILY BETTER THAN ITERATIVE...):
function steps(n, row = 0, step = '') {
    if (row === n) {
        return
    }
    if (step.length === n) {
        console.log(step)
        return steps(n, row + 1)
    }
    if (step.length <= row) {
        step += '#'
    } else {
        step += ' '
    }

    steps(n, row, step)
}

module.exports = steps;

// ITERATIVE:
// function steps(n) {
//     for (let row = 1; row <=n; row++) {
//         let step = ''
//         for (let col = 1; col <= n; col++) {
//             if (col <= row) {
//                 step += "#"
//             } else {
//                 step += ' '
//             }
//         }
//         console.log(step)
//     }
// }