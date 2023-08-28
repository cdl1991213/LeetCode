/* Object.assign(target, source1, ... ,sourceN) */
/* 
    将源对象的可枚举属性复制到目标对象
        同名属性，覆盖
        只复制目标对象的自身属性，不复制继承属性
    1. 判断目标对象类型，将目标对象转换为对象类型
    2. 将源对象自身的所有可枚举属性复制到目标对象(本质是浅拷贝过程)
        1. 判断源对象类型，将源对象转换为对象类型
        2. 获取源对象的可枚举属性
        3. 遍历去除不可枚举属性
        
    3. 将assign挂载到对象上（由于直接挂载在对象上的assign是可枚举的，但是assign应为不可枚举的，因此需要借助Object.defineProperty）
*/
Object.ObjectAssign = (target, ...sources) => {
    // 判断目标对象
    if(target == undefined || target == null){
        throw new Error("无法将第一个参数转化为对象类型")
    }

    // 将第一个参数转化为对象类型
    const targetObj = Object(target)

    // 将源对象自身的所有可枚举属性复制到目标对象(本质是浅拷贝过程)
    for(let i=0; i<sources.length; i++){
        let source = sources[i]
        // 对于源对象类型为undefined或null, 直接跳过
        if(source != undefined && source != null){
            // 将后面的参数转换为对象类型
            let sourceObj = Object(source)

            // 获取源对象的可枚举属性
            // Reflect.ownKeys(obj)  返回一个数组，包含对象自身的所有属性(不管属性名是Symbol还是字符串，不管是否可枚举)
            let propertiesArr = Reflect.ownKeys(sourceObj)

            // 遍历去除不可枚举的属性
            for(let key=0; key<propertiesArr.length; key++){
                let property = propertiesArr[key]
                // 获取属性描述
                let desc = Object.getOwnPropertyDescriptor(sourceObj, property)
                if(desc != undefined && desc.enumerable){
                    targetObj[property] = sourceObj[property]
                }
            }
        }
    }

    return targetObj
} 

if(typeof Object.ObjectAssign != "function"){
    Object.defineProperties(Object, "ObjectAssign", {
        value : ObjectAssign,
        writable : true,
        enumerable : false,
        configurable : true
    })
}