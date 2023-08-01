// 数组
/* 
    =====================================================
    初始化
    =====================================================
*/
// 创建元素为[1,2,3]的数组
let arr = new Array(1, 2, 3)
// 创建长度为10的数组
let arr1 = new Array(10)
// 创建长度为10的数组，并用0填充数组
let arr2 = Array(10).fill(0)
// 根据对象创建数组, ['c','s','d','n']
let arr3 = Array.from('csdn')
// 根据对象创建长度为10的数组，并用[]填充
let arr4 = Array.from({length: 10}, () => []) 

/* 
    =====================================================
    增 
    =====================================================
*/
// 添加 push、unshift
arr.push()  //末尾添加
arr.unshift()  //首位添加

/* 
    =====================================================
    删 
    =====================================================
*/
// 删除 pop、shift
arr.pop() //末尾删除
arr.shift()  //首位删除

/* 
    =====================================================
    改 
    =====================================================
*/
// 切片 slice
// slice() 方法可从已有的数组中返回选定的元素（不改变原数组）
arr = [1, 2, 3]
arr.slice(start, end)

// 替换 splice
arr = [1, 2, 3]
arr.splice(0, 1, 5) //[5, 2, 3]
arr.splice(1, 1) //[1, 3]

// 填充 fill
arr.fill(1)  //全部替换
arr.fill(1, start, end)  //指定范围替换

// 排序-正序 sort
arr = [2, 1, 3, 4]
res = arr.sort((x, y)=>x-y)  //[1, 2, 3, 4]

// 颠倒 reverse
arr.reverse()

// 拼接 concat
// concat() 方法用于连接两个或多个数组，该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
arr1 = [1, 2, 3]
arr2 = [3]
arr1.concat(arr2);   //[1, 2, 3, 3]

// 删除 delete
arr = [1, 2, 3]
delete arr[0] //[ , 2 ,3]

// 数组转字符串 toString、join
// join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的（不改变原数组）
arr = [1, 2, 3]
arr.toString()      //"1,2,3,4", 把数组转换为字符串，逗号分隔每一项
arr = [2019, 3, 14]
arr.join('分隔符')  //会将数组的所有元素用指定的分隔符链接成为一个字符串
arr.join('.')  //2019.3.14


/* 
    =====================================================
    查
    =====================================================
*/
// indexOf, lastIndexOf, find, findIndex, findLast, findLastIndex, includes
arr = [1, 2, 3, 4, 5]
res = arr.indexOf(1)      //0
res = arr.includes(1)     //true
res = arr.find(item=>item>2)            // (从头开始查找)3
res = arr.findIndex(item=>item>2)          // (从头开始查找)2
res = arr.findLast(item=>item>2)             // (从末尾开始查找)5
res = arr.findLastIndex(item=>item>2)   // (从末尾开始查找)4


/* 
    =====================================================
    遍历
    =====================================================
*/
// for循环遍历
for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}

// 迭代方法遍历，every, some, filter, map, foreach, reduce
arr = [10, 11, 12, 13]
res = arr.every(item=>item>10)     //true
res = arr.some(item=>item>12)      //true
res = arr.filter(item=>item>12)    //[13]
res = arr.map(item=>item+"t")      //[10t, 11t, 12t, 13t]
res = arr.reduce((item1, item2)=>item1+item2)  //46, item1+item2返回结果作为下一次的item1
arr.forEach((item,index)=>{
    console.log(item, index);
})

// 迭代器 entries，keys，values
arr = [1, 2, 3]
res = arr.entries() //键值对[[0, 1], [1, 2], [2, 3]]
res = arr.keys() //键[0, 1, 2]
res = arr.values() //值[1, 2, 3]

/* 
    =====================================================
    判断两个数组相等
    在 js 中是不能直接用 == 或者 === 来比较两个数组是否相等，那就需要对数组的值进行比较
    =====================================================
*/
// toString
// 当两个数组元素类型相同，顺序相同时，直接判断是否相等，结果不相等；转化为字符串后，结果相等
[1,2,3].toString() === [1, 2, 3].toString(); // true
[1,2,3].toString() === ['1', 2, 3].toString(); // true
// join
[1,2,3,'4'].join() === [1,2,3, 4].join(); // true
// JSON.stringify
JSON.stringify([{name:'许善祥'},{sex:'男'}]) == JSON.stringify([{name:'许善祥'},{sex:'男'}]); // true


/* 
    =====================================================
    数组复制
    =====================================================
*/
// concat
// concat（）方法用于连接两个或多个数组；
// concat() 方法不会更改现有数组，而是返回一个新数组，其中包含已连接数组的值。
arr1 = [1, 2, 3];
arr2 = arr1.concat();
arr1.push(4);
console.log(arr2); // [1, 2, 3]

// slice
// slice() 方法以新的数组对象，返回数组中被选中的元素，不会改变原始数组
// slice() 方法选择从给定的 start 参数开始的元素，并在给定的 end 参数处结束，但不包括end;
arr1 = [1, 2, 3];
arr2 = arr1.slice();
arr1[0] = 10;
console.log(arr1);// [10, 2, 3]
console.log(arr2);// [1, 2, 3]

// 扩展运算符
arr1 = [1, 2, 3];
[ ...arr2 ] = arr1;
arr1[0] = 10;
console.log(arr1); // [10, 2, 3]
console.log(arr2);// [1, 2, 3]

// Object.assign()
arr1 = [1, 2, 3];
arr2 = Object.assign([], arr1);
arr1[0] = 10;
console.log(arr1);// [10, 2, 3]
console.log(arr2);// [1, 2, 3]
