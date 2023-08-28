/* p.catch(onRejected) */
/* 
    是then()发生错误时的回调函数
    是.then(null, rejection)或.then(undefined, rejection)的别名
*/
Promise.prototype.pCatch = function(){
    return this.then(undefined, onRejected);
}