/* promise.all */
/* 
    用于将多个Promise实例，包装成一个新的Promise实例
*/
// interator为可遍历的结构
function promiseAll(interator){
    return new Promise((reject, resolve) => {
        let arr = Array.from(interator)
        let res = []
        // 已resolve对象数量
        let count = 0
        for(let i=0; i<arr.length; i++){
            // 转换为Promise对象
            Promise.resolve(arr[i])
                .then((item) => {
                    // resolve
                    res[i] = item
                    count++
                    // 所有对象都resolve
                    if(count == arr.length){
                        resolve(res)
                    }
                })
                .catch(error => reject(error))
        }
    })
}