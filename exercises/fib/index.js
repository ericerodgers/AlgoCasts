// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // recursive solution is EXPONENTIAL runtime... iterative solution is better!
    if (n < 2) return n
    return fib(n-1) + fib(n-2)

    // iterative example has linear runtime O(n):
    // const result = [0, 1]
    // while (result.length <= n) {
    //     result.push(result[result.length - 1] + result[result.length - 2])
    // }
    // return result[n]
}

module.exports = fib;

// ONE-LINE memoized fib!!!
// const fib = (n) => (n < 2 ? n : (cache[n] ||= fib(n - 1) + fib(n - 2)))

// which is a reduction of regular memoized fib:
// const cache = {}
// const fib = (n) => {
//   if (n < 2) return n
//   cache[n] = cache[n] || fib(n - 1) + fib(n - 2)
//   return cache[n]
// }

//Memoized fib written even more declaratively
const memo = {}
const memoFib = (n) => {
    if (n<2) return n;
    if (memo[n]) {
        return memo[n]
    } else {
        memo[n] = fib(n)
        return memo[n];
    }
}

// OR YOU CAN CREATE AN AMAZING GENERIC MEMOIZE FUNC AND USE THAT!!!!!
// const memoizeFunc = fn => {
//     const cache = {}

//     const func = (...args) => {
//         if (cache[args]) {
//             return cache[args]
//         } else {
//             cache[args] = fn.apply(this, args)
//             return cache[args]
//         }
//     }

//     return func;
// }

// const fib = n => {
//     if (n < 2) return n;
//     return fastFib(n - 1) + fastFib(n - 2)
// }
// const fastFib = memoizeFunc(fib)

// module.exports = fib;
