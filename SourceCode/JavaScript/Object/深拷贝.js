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
function cloneDeep2(source) {
    // 如果输入的为基本类型，直接返回
    if (!(typeof source == 'object' && source != null)) {
        return source;
    }

    // 根据输入对象类型，构建克隆对象
    const cloneObj = Array.isArray(source) ? [] : {}

    for (let property in source) {
        // 判断是否是自身属性
        if (Object.prototype.hasOwnProperty.call(source, property)) {
            // 递归
            if (typeof source === 'object' && source !== null) {
                cloneObj[property] = cloneDeep2(source[property]);
            } else {
                cloneObj[property] = source[property];
            }
        }
    }

    return cloneObj
}

