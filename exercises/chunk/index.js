// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const output = [];
    let i = 0;
    while (i < array.length) {
        const chunk = array.slice(i, i + size);
        output.push(chunk);
        i += size;
    }
    return output;




    // const output = [];
    // for (const el of array) {
    //     const lastChunk = output[output.length - 1]
    //     if (!lastChunk || lastChunk.length === size) {
    //         output.push([el])
    //     } else {
    //         lastChunk.push(el)
    //     }
    // }
    // return output;


    // const output = [];
    // for (let i = 0; i < array.length; i+=size) {
    //     const chunk = [];
    //     for (let j = i; j < i + size; j++) {
    //         chunk.push(array[j])
    //     }
    //     output.push(chunk)
    // }
    // return output;
}

module.exports = chunk;
