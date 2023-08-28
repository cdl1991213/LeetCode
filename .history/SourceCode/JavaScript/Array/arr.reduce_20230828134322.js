/* arr.reduce */
/* 
    数组中每个元素都调用一次函数(升序执行)，返回函数累计处理的结果
    1. 判断参数是否为函数类型
    2. 获取数组内容
    3. 获取初始值
    4. 返回累计处理结果
    */
Array.prototype.reduceArr = function (fn, initVal) {
    // 1. 判断参数是否为函数类型
    if (typeof fn != "function") {
        throw new Error(fn + "is not a function");
    }

    // 2. 获取数组内容
    let arr = this;
    let n = arr.length;
    let res;
    // 当前索引
    let k = 0;

    // 3. 获取初始值
    if (arguments >= 2) {
        // 参数提供初始值
        res = arguments[1];
    } else {
        // 参数不提供初始值
        // 稀疏数组中，忽略空的位置
        while (k < n && !(k in arr)) {
            k++;
        }
        // 空数组
        if (k >= n) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        res = arr[k++];
    }

    // 4. 返回累计处理结果
    while (k < n) {
        if (k in arr) {
            res = fn(res, arr[k], k, arr);
        }
        k++;
    }

    return res;
};
