/* fn.bind(thisObj,  arg1, ... ,argN) */
/* 
    返回一个该函数的拷贝，并指定的this值和参数
    1. 调用者类型必须为函数
    2. 继承原型链
    3. 当返回函数作为构造函数/非构造函数时，分别指定调用对象
    */
Function.prototype.fnBind = function (thisObj, ...args) {
    // 1. 调用者类型必须为函数
    if (typeof this != "function") {
        throw new TypeError("只有函数才能调用bind");
    }

    // 保存该函数
    let self = this;
    // 中介
    const fNOP = function () {};
    // 要返回的函数
    const fBound = function(...fBoundArgs){
        // 3. 当返回函数作为构造函数/非构造函数时，分别指定调用对象
        // 当作为构造函数时，this指向fNOP函数的实例
        // 非构造函数时，this是指向绑定的obj对象（如果obj没有值，不传值或者是null，那么这个this是指向window）
        return self.apply(this instanceof fNOP ? this : thisObj, [...args, ...fBoundArgs]);
    }

    // 2. 返回函数的 prototype
    // 为了避免直接修改this的原型，所以新建了一个fNOP函数作为中介
    if (this.prototype) {
        fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound
    
};
