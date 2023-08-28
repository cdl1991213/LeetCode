/* Object.create */
/* 
    使用现有对象来作为新创建对象的proto
    1. 新建一个空对象
    2. 设置原型对象
    3. 继承属性值
*/
Object.ObjectCreate = (proto, properties) => {
    // 检测输入对象
    if(typeof proto != "object" && typeof proto != "function" && proto != null){
        throw new Error("原型对象类型只能为object或funciton")
    }

    // 新对象
    const obj = {}

    // 设置原型对象
    Object.setPrototypeOf(obj, proto)

    // 继承属性值
    Object.defineProperties(obj, properties)

    return obj
}