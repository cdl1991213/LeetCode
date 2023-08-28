/* instanceof */
/* 
    判断右边变量的prototype是否在左边变量的原型链上，因此instanceof会遍历左边变量的原型链
    1. 通过左边变量的proto获取构造函数的原型对象
    2. 通过右边变量的prototype获取原型对象
*/
function Instanceof(left, right){
    // 左边变量的proto获取构造函数的原型对象
    let leftPrototypeObj = Object.getPrototypeOf(left)

    // 右边变量的prototype获取原型对象
    let rightPrototypeObj = Object.getPrototypeOf(right)

    // 顺着原型链往上找
    while(leftPrototypeObj != null){
        if(leftPrototypeObj == rightPrototypeObj){
            return true
        }
        leftPrototypeObj = Object.getPrototypeOf(leftPrototypeObj)
    }
    return false
}