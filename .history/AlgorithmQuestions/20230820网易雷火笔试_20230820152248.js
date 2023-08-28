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
    let product = 1;

    for (const num of nums) {
        if (num !== 0) {
            product *= num;
            maxBeauty = Math.max(maxBeauty, product);
        } else {
            product = 1;
        }
    }

    return maxBeauty;
}

// 测试
console.log(maxBeautyValue([-1, 1, 0])); // 输出 0
console.log(maxBeautyValue([2, 0, -1, -4, 0])); // 输出 4
console.log(maxBeautyValue([0, 3, -2, 5, -4, -4])); // 输出 16
console.log(maxBeautyValue([5,0,2,1])); // 输出 10

