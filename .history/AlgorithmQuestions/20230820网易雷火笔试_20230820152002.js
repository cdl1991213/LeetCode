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



function maxBeautyValue(nums) {
    let maxBeauty = 0;
    let positiveProduct = 1; // 连续正数段的乘积
    let negativeProduct = 1; // 连续负数段的乘积
    let negativeCount = 0;    // 连续负数段的个数

    for (const num of nums) {
        if (num > 0) {
            positiveProduct *= num;
            negativeProduct *= num;
        } else if (num < 0) {
            let temp = negativeProduct;
            negativeProduct = Math.min(positiveProduct * num, num);
            positiveProduct = temp * num;

            negativeCount++;
        } else {
            // 当遇到0时，重置乘积和负数个数
            positiveProduct = 1;
            negativeProduct = 1;
            negativeCount = 0;
        }

        if (negativeCount % 2 === 0) {
            maxBeauty = Math.max(maxBeauty, positiveProduct);
        } else {
            maxBeauty = Math.max(maxBeauty, negativeProduct);
        }
    }

    return maxBeauty;
}

// 测试
const nums1 = [5, 0, 2, 1];
console.log(maxBeautyValue(nums1)); // 输出 2

const nums2 = [2, -3, -2, 3];
console.log(maxBeautyValue(nums2)); // 输出 6

const nums = [-1, 1, 0];
console.log(maxBeautyValue(nums1)); // 输出 0
