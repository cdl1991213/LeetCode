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


function add(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    const arity = fn.length; // 获取函数的参数个数

    function curried(...args) {
        if (args.length >= arity) {
            return fn.apply(null, args);
        } else {
            return function (...moreArgs) {
                return curried.apply(null, args.concat(moreArgs));
            };
        }
    }

    return curried;
}

let curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
