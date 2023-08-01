// 哈希表
//定义Map
let mymap = new Map()

// Map操作
// 1.添加
mymap.set("name", "cdl").set("age", 24)    //Map(1) { 'name' => 'cdl' }
// 2.获取
mymap.get("name")   //cdl
// 3.删除
mymap.delete("name")    //Map(0) {}
// 4.清空
mymap.clear()
// 5.搜索
mymap.has("name")
// 6.获取长度
mymap.size()

// 迭代器对象，需要转换为数组
mymap.entries()   //键值对
mymap.keys()   //键
mymap.values()   //值

// 遍历
// for-of
for(let [key, value] of mymap){}

// forEach
mymap.forEach((value, key) => {});