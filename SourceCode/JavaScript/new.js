/* new */
/* 
    1. 创建新对象
    2. 对象的proto指向构造函数的prototype原型
    3. 绑定执行上下文(this)
    4. 构造函数是否有返回值
*/
function New(fn, ...args){
    // 创建新对象
    const obj = {}

    // 指定proto
    if(fn.prototype != null){
        Object.setPrototypeOf(obj, fn.prototype)
    }

    // this
    const res = fn.apply(obj, args)

    // 构造函数返回值
    if((typeof res == "object" || typeof res == "function") && res != null){
        return res
    }
    return obj
}