// function add(a,b,c){
//     return a+b+c
// }

// function curry(fn){
    
// }

// let curriedAdd = curry(add)
// console.log(curriedAdd(1)(2)(3)); //6
// console.log(curriedAdd(1,2)(3)); //6
// console.log(curriedAdd(1)(2,3)); //6
// console.log(curriedAdd(1,2,3)); //6


// function add(a, b, c) {
//     return a + b + c;
// }

// function curry(fn) {
//     const arity = fn.length; // 获取函数的参数个数

//     function curried(...args) {
//         if (args.length >= arity) {
//             return fn.apply(null, args);
//         } else {
//             return function (...moreArgs) {
//                 return curried.apply(null, args.concat(moreArgs));
//             };
//         }
//     }

//     return curried;
// }

// let curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3)); // 6
// console.log(curriedAdd(1, 2)(3)); // 6
// console.log(curriedAdd(1)(2, 3)); // 6
// console.log(curriedAdd(1, 2, 3)); // 6



function maxBeautifulValue(arr) {
    const n = arr.length;
    
    if (n <= 2) {
        return 0; // If the array has 2 or fewer elements, the maximum beautiful value will always be 0.
    }
    
    // Initialize two arrays to keep track of the maximum and minimum beautiful values ending at index i.
    const maxEndingHere = new Array(n).fill(0);
    const minEndingHere = new Array(n).fill(0);
    
    maxEndingHere[0] = minEndingHere[0] = 0;
    
    let maxValue = 0;
    
    for (let i = 1; i < n; i++) {
        // Calculate the maximum and minimum beautiful values ending at index i based on the previous values.
        maxEndingHere[i] = Math.max(arr[i], arr[i] * maxEndingHere[i - 1], arr[i] * minEndingHere[i - 1]);
        minEndingHere[i] = Math.min(arr[i], arr[i] * maxEndingHere[i - 1], arr[i] * minEndingHere[i - 1]);
        
        // Update the overall maximum beautiful value.
        maxValue = Math.max(maxValue, maxEndingHere[i]);
    }
    
    return maxValue;
}

// Test cases
console.log(maxBeautifulValue([-1, 1, 0])); // Output: 0
console.log(maxBeautifulValue([2, 0, -1, -4, 0])); // Output: 4
console.log(maxBeautifulValue([0, 3, -2, 5, -4, -4])); // Output: 16

