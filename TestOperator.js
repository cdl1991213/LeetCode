/* 
    测试器1
        Input:(Arr)
        maxSize 数组最大长度
        maxValue 数组元素最大值
*/
export function TestOperator1(TestMethod, maxSize = 100, maxValue = 100){
    console.log("测试器开始......")
    let arr = generateRandomArray(maxSize, maxValue)
    console.log("Input Arr:", arr)
    let res = TestMethod(arr)
    console.log('TestMethodResult:', res)
    console.log("Changed Arr:", arr)
    console.log("测试器结束......")
}

/* 
测试器2
Input:(Arr, Num)
maxSize 数组最大长度
maxValue 数组元素最大值
*/
export function TestOperator2(TestMethod, maxSize = 100, maxValue = 100){
    console.log("测试器开始......")
    let arr = generateRandomArray(maxSize, maxValue)
    // 在此处修改输入的Num
    let num = generateRandomNum(0, arr.length - 1)
    console.log("Input Arr:", arr)
    console.log("Input Num:", num)
    let res = TestMethod(arr, num)
    console.log('TestMethodResult:', res)
    console.log("Changed Arr:", arr)
    console.log("测试器结束......")
}


// -----------------------------------------------------Tools-----------------------------------------------------
// 随机数组产生器
function generateRandomArray(maxSize, maxValue){
    /* 
        Math.random() -> [0,1) 所有的小数，等概率返回一个
        Math.random() * N -> [0,N) 所有的小数，等概率返回一个
        parseInt( Math.random() * N ) -> [0,N-1] 所有的整数，等概率返回一个
    */

    // 初始化随即长度的数组
    let arr = new Array(parseInt( (maxSize + 1) * Math.random() ))
    // 为数组填充随机
    for(let i=0; i<arr.length; i++){
        // [0, max] - [0, max-1]
        arr[i] = parseInt( (maxValue + 1) * Math.random() ) - parseInt( maxValue * Math.random() ) 
    }
    return arr
}
// 随机数产生器
function generateRandomNum(maxValue, minValue){
    return Math.floor( Math.random() * (maxValue - minValue + 1) ) + minValue
}