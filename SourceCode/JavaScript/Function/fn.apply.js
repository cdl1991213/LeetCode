/* fn.apply(thisObj, [argsArr]) */
/* 
    使用一个指定的this值和参数来调用该函数
    1. 获取this值
    2. 将该函数传入this值指定的对象中
    3. 获取参数数组，执行函数
*/
Function.prototype.fnApply = function(thisObj, argsArr){
    // 1. 获取this值
    // 第一个参数为null或undefined是，this指向window
    thisObj = thisObj ? Object(thisObj) : window
    
    // 2. 将该函数传入this值指定的对象中
    thisObj.fn = this

    // 3. 获取参数数组，执行函数
    let res = argsArr ? thisObj.fn(...argsArr) : thisObj.fn()

    delete thisObj.fn
    return res
}