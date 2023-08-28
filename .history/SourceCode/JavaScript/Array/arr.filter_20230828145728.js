/* arr.filter(fn, [thisObj]) */
/* 
    筛选出满足条件的元素，构建一个新数组
    1. 判断参数是否为函数类型
    2. 获取数组内容
    3. 遍历对每个元素进行处理，返回结果
*/
// arr.map(function, [thisObj])
Array.prototype.arrFilter = function(fn){
    // 判断参数是否为函数类型
    if(typeof fn != "function"){
        throw new Error(fn + "is not a function")
    }

    // 获取数组内容
    let arr = this
    let n = arr.length
    let resArr = []

    // 遍历对每个元素进行处理，返回结果
    for(let i=0; i<n; i++){
        // 第二个参数arguments[1]指定this指向
        // Function.call(obj,value1,value2…)
        let res = fn.call(arguments[1], arr[i] , i, arr)
        if(res){
            resArr.push(arr[i])
        }
    }

    return resArr
}