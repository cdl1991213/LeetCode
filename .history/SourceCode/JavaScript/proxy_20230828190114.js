/* proxy */
/* 
    基本使用
*/
const myObj = { name: "John", age: 30 };
const handler = {
    get(target, property) {
        return target[property];
    },
    set(target, property, value) {
        target[property] = value;
    },
};
const myProxy = new Proxy(myObj, handler);
