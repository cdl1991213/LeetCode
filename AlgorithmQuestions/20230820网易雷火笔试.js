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



function maxBeautyValue(arr) {
    const n = arr.length;
    if (n <= 2) {
        return 0;  // 如果数组长度小于等于2，则美丽值必定为0
    }

    // 初始化最大正美丽值和最大负美丽值数组
    const maxPositive = new Array(n).fill(0);
    const maxNegative = new Array(n).fill(0);

    // 更新数组的第一个元素值
    maxPositive[0] = Math.max(0, arr[0]);
    maxNegative[0] = Math.min(0, arr[0]);

    // 遍历数组，更新最大正美丽值和最大负美丽值数组
    for (let i = 1; i < n; i++) {
        maxPositive[i] = Math.max(arr[i], arr[i] * maxPositive[i - 1], arr[i] * maxNegative[i - 1]);
        maxNegative[i] = Math.min(arr[i], arr[i] * maxPositive[i - 1], arr[i] * maxNegative[i - 1]);
    }

    // 找到最大正美丽值数组中的最大值即为答案wowo  let maxResult = 0;
    for (let i = 0; i < n; i++) {
        maxResult = Math.max(maxResult, maxPositive[i]);
    }

    return maxResult;
}

// 测试示例
console.log(maxBeautyValue([-1, 1, 0]));  // 输出: 0
console.log(maxBeautyValue([2, 0, -1, -4, 0]));  // 输出: 4
console.log(maxBeautyValue([0, 3, -2, 5, -4, -4]));  // 输出: 16


