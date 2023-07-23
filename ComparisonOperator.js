// 对数器（输入为数组，原地改变数组）
/* 
    testTime 测试次数
    maxSize 数组最大长度
    maxValue 数组元素最大值
*/
export function ComparisionOperatorWithInputArrayChangeArrayInPlace(TestMethod, templateMethod = defaultTemplateMethod, testTime = 50000, maxSize = 100, maxValue = 100){
    
    // TestMethod是否通过测试
    let succeed = true

    for(let i=0; i<testTime; i++){
        // 生成一个随机数组
        let arr1 = generateRandomArray(maxSize, maxValue)
        // copy
        let arr2 = [...arr1]

        TestMethod(arr1)
        templateMethod(arr2)

        // 判断运行结果是否相同
        if(!(arr1.join() == arr2.join())){
            // 打印运行结果
            console.log('TestMethodResult:', arr1)
            console.log('templateMethodResult:', arr2)
            succeed = false
            break
        }
    }

    // 打印测试结果
    console.log(succeed ? "Accept!" : "Fucking fucked!")
}

// 对数器（输入为数组，输出为数值）
/* 
    testTime 测试次数
    maxSize 数组最大长度
    maxValue 数组元素最大值
*/
export function ComparisionOperatorWithInputArrayOutputNum(TestMethod, templateMethod, testTime = 50000, maxSize = 100, maxValue = 100){
    
    // TestMethod是否通过测试
    let succeed = true

    for(let i=0; i<testTime; i++){
        // 生成一个随机数组
        let arr1 = generateRandomArray(maxSize, maxValue)
        // copy
        let arr2 = [...arr1]

        let res1 = TestMethod(arr1)
        let res2 = templateMethod(arr2)

        // 判断运行结果是否相同
        if(res1 != res2){
            // 打印输入数组
            // console.log("InputArr:", arr1)
            // 打印运行结果
            console.log('TestMethodResult:', res1)
            console.log('templateMethodResult:', res2)
            succeed = false
            break
        }
    }

    // 打印测试结果
    console.log(succeed ? "Accept!" : "Fucking fucked!")
}

// 使用随机数组测试TestMethod
/* 
    maxSize 数组最大长度
    maxValue 数组元素最大值
*/
export function randomTestWithInputArray(TestMethod, maxSize = 100, maxValue = 100){
    let arr = generateRandomArray(maxSize, maxValue)
    console.log("arr before sort:", arr)
    TestMethod(arr)
    console.log("arr after sort:", arr)
}

// 默认templateMethod
const defaultTemplateMethod = (arr) => {
    return arr.sort((x,y) => x-y)
}

// 随机样本产生器
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