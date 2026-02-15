// Convert deeply nested array into a single array.
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]

// Method One Modern Javascript.
let arr = [1, [2, [3, 4]], 5];
const result = arr.flat(Infinity);
console.log(result);

// Method Two Recursive Function.
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item)); // recursive call
        } else {
            result.push(item);
        }
    });
    return result;
}

console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]