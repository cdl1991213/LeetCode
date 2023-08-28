/* Promise.race([promise1, promise2, ...]) */
/* 
    返回最先改变状态的promise对象的结果
*/
// interator为可遍历的结构
function promiseRace(interator){
    return new Promise((resolve, reject) => {
        let arr = Array.from(interator)

        for(let i=0; i<arr.length; i++){
            // 转换为Promise对象
            Promise.resolve(arr[i]).then((resolve) => {
                resolve(resolve)
            }, (reject) => {
                reject(reject)
            })
        }
    })
}