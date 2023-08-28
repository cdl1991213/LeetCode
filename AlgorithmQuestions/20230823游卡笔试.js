/* 
    自定义指令正确的有
        A 全局注册主要是通过Vue.directive
        B 有助于输入框防抖
        C可用于图片懒加载
        D可用于一键Copy
    
    es5 es6 的class有什么区别
        class类无法便利实例原型链上的属性方法是es5 es6 的class的区别吗
        class类必须new调用是es5 es6 的class的区别吗
    
    前端数据安全有哪些预防方法
        A font-face拼接方式  
        Bbackground拼接  
        Ciframe同步加载  
        D元素定位覆盖式   
        E伪元素隐藏
    
    判断js数据类型的方法有
        使用 typeof 操作符
        使用 instanceof 操作符
        使用 Array.isArray() 方法
        使用 Object.prototype.toString.call() 方法
    
    箭头函数 有关正确的是  
        A 不是匿名函数。不能作为构造函数，不能用new  
        B不绑定arg  用rest参数取代   
        C不绑定this 会捕获上下文的this   
        D没有原型属性
    
    以下哪些属性可被继承  font-size   border  color  margin

    link 和@import的区别

    下列关于WebStorage正确的是 
        A克服由COOKIE所带来的一些限制 
        B数据需要被严格控制在客户端时，不需要持续的将数据发回服务器   
        C提供一种cookie之外存储会话数据的路径  
        D提供一种存储大量可以跨会话存在的数据的机制
    
    以下哪个不是ajax的callback  
        A onUninitialized   
        B onblur  
        C onInteractive    
        D onException

    h5中能定位的api是

    以下关于XSS攻击的防范不正确的是
        A 验证码    
        B HTTPOnly防止截取cookie    
        C 键入检查   
        D 输出检查
    
    以下关于CSRF攻击的防范不正确的是
        A 验证码    
        B HTTPOnly防止截取cookie    
        C Referer Check   
        D 添加token

    以上优先级最高的是
        .b div           
        div div p span
        div 
        #b
    
    执行顺序是怎么样的
        :link  :visited :hover  :active
    
*/


/* 
    根据以下要求，写一个数组去重函数
    1.传入的数组为[123,'meili','123',"mogu",123]，则输出[123,'meili','123',"mogu"]
    2.传入的数组为[123,[1,2,3],[1,"2",3],[1,2,3],'meili']，则输出[123,'meili',[1,2,3],[1,"2",3]]
    3.传入的数组为[123,{a:1},{a:{b:1}},{a:"1"},{a:{b:1}},'meili']，则输出[123,{a:1},{a:{b:1}},{a:"1"},'meili']
*/
function deepUnique(arr) {
    const result = [];
    const seen = new Map();

    function isObject(obj) {
        return typeof obj === "object" && obj !== null;
    }

    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (!isEqual(arr1[i], arr2[i])) {
                return false;
            }
        }
        return true;
    }

    function compareObjects(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!isEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }

    function isEqual(value1, value2) {
        if (isObject(value1) && isObject(value2)) {
            if (Array.isArray(value1) && Array.isArray(value2)) {
                return compareArrays(value1, value2);
            } else if (!Array.isArray(value1) && !Array.isArray(value2)) {
                return compareObjects(value1, value2);
            }
            return false;
        }
        return value1 === value2;
    }

    for (const item of arr) {
        let isDuplicate = false;
        for (const [index, seenItem] of seen) {
            if (isEqual(item, seenItem)) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(item);
            seen.set(result.length - 1, item);
        }
    }

    return result;
}

// 示例用法
const arr1 = [123, "meili", "123", "mogu", 123];
console.log(deepUnique(arr1)); // [123, 'meili', '123', 'mogu']

const arr2 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];
console.log(deepUnique(arr2)); // [123, 'meili', [1, 2, 3], [1, "2", 3]]

const arr3 = [
    123,
    { a: 1 },
    { a: { b: 1 } },
    { a: "1" },
    { a: { b: 1 } },
    "meili",
];
console.log(deepUnique(arr3)); // [123, {a: 1}, {a: {b: 1}}, {a: "1"}, 'meili']

/* 
  使用最简洁的代码实现indexOf方法（不使用indexOf方法） 
*/
function indexOf(arr, target, start = 0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// 示例用法
const myArray = [1, 2, 3, 4, 5];
console.log(indexOf(myArray, 3)); // 输出: 2
console.log(indexOf(myArray, 6)); // 输出: -1（表示未找到）
console.log(indexOf(myArray, 2, 2)); // 输出: -1（从索引 2 开始查找，但没有找到）

