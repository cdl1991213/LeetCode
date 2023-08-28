/* p.finally(callback) */
/* 
    不论promise对象结果如何,都会执行
*/
Promise.prototype.pFinally = function (callback) {
    return this.then(
        (value) => Promise.resolve(callback()).then(() => value),
        (reason) => {
            Promise.resolve(callback()).then(() => {
                throw reason;
            });
        }
    );
};
