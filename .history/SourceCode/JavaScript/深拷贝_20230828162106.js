/* 深拷贝 */
/* 
    克隆出一个对象，数据相同，但引用地址不同
    深拷贝：复制数据
    浅拷贝：复制对象的引用地址
*/
// 原生api版
function cloneDeep1(source) {
    return JSON.parse(JSON.stringify(source));
}

// 递归版

// 循环遍历版