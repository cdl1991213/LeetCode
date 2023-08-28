/* fn.bind(thisObj,  arg1, ... ,argN) */
/* 
    返回一个该函数的拷贝，并指定的this值和参数
    1. 调用者类型必须为函数
    2. 获取this值
    3. 获取参数数组，返回函数
    */
Function.prototype.fnBind = function (thisObj, ...args) {
    // 1. 调用者类型必须为函数
    if (typeof this != "function") {
        throw new TypeError("只有函数才能调用bind");
    }

    let self = this;
    let fBound = function(...fBoundArgs){
        return self.apply(this instanceof fNOP ? this : context, [...args, ...fBoundArgs]);
    }

    // 修改返回函数的 prototype 为绑定函数的 prototype
    // 为了避免直接修改this的原型，所以新建了一个fNOP函数作为中介
    const fNOP = function () {};
    if (this.prototype) {
        fNOP.prototype = this.prototype;
    }
    // 当使用new调用返回函数时，this指向fNOP函数的实例
    fBound.prototype = new fNOP();

    return fBound
};
