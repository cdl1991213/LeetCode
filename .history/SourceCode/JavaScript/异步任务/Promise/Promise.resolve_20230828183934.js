/* Promise.resolve(value) */
/* 
    返回一个新的promise实例，状态为resolved

*/
function promiseResolve(value) {
    // 参数是promise对象，则直接返回
    if (value instanceof Promise) {
        return value;
    }

    // 参数是thenable对象（具有then方法的对象）,则将这个对象转为 Promise 对象,然后立即执行then方法
    if (typeof value === "object" || typeof value === "function") {
        try {
            let then = value.then;
            if (typeof then === "function") {
                // 将这个对象转为 Promise 对象,然后立即执行then方法
                return new Promise(then.bind(value));
            }
        } catch (e) {
            return new Promise((resolve, reject) => {
                reject(e);
            });
        }
    }

    // 参数不是具有then方法的对象,或根本就不是对象,则返回一个新的 Promise 对象，状态为resolved
    return new Promise((resolve, reject) => {
        resolve(value);
    })
}
