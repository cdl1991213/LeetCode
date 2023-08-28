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



def maxBeautyValue(arr):
    n = len(arr)
    dp = [0] * n
    dp[0] = arr[0]
    max_beauty = dp[0]

    for i in range(1, n):
        dp[i] = max(dp[i-1] * arr[i], arr[i])
        max_beauty = max(max_beauty, dp[i])

    return max_beauty

# 测试
arr1 = [-1, 1, 0]
arr2 = [2, 0, -1, -4, 0]
arr3 = [0, 3, -2, 5, -4, -4]

print(maxBeautyValue(arr1))  /* # 输出 0 */
print(maxBeautyValue(arr2))  /* # 输出 4 */
print(maxBeautyValue(arr3))  /* # 输出 16 */

