/* Promise.reject(reason) */
/* 
    返回一个新的promise实例，状态为reject
*/
function promiseReject(reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}
