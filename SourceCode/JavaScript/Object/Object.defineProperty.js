/* Object.defineProperty(obj, prop, descriptor) */
/* 
    在对象上定义新属性，或者修改对象的现有属性，并返回此对象
    obj         要定义属性的对象（目标对象）
    prop        要定义或修改的属性的名称
    descriptor  目标对象属性的一些特征（是一个对象）
    descriptor  下有6个参数
    参数1：
        value:属性值
    参数2：
    　　writable：对象属性值是否可以被修改  true允许  false不允许
    参数3：
    　　configurable:对象属性是否可以被删除 true允许  false不允许
    参数4：
    　　enumerable:对象属性是否可被枚举
    参数5：
        get():给一个属性提供getter方法，当访问这个对象的属性值得时候触发该方法
    参数6：
        set():给一个属性提供setter方法，当设置属性值得时候触发该方法  
*/
