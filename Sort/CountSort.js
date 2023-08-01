// 计数排序

function CountSort(arr){
    const n = arr.length 

    // 剪枝
    if(arr == null || n < 2){
        return
    }

    // 记录数组最大值、最小值
    let maxValue = Number.MIN_SAFE_INTEGER, minValue = Number.MAX_SAFE_INTEGER
    // 获取数组数值的大小范围
    // 0 ~ N-1
    for(let i=0; i<n; i++){
        maxValue = arr[i] > maxValue ? arr[i] : maxValue
        minValue = arr[i] < minValue ? arr[i] : minValue
    }

    // 计数数组（桶）
    let countArray = new Array(maxValue - minValue + 1).fill(0)
    // 数组元素索引的偏移量
    let offset = minValue

    // 计数（入桶）
    // 0 ~ N-1
    for(let i=0; i<n; i++){
        countArray[ arr[i] - offset ]++ 
    }

    // 出桶指针
    let p = 0
    // 覆盖原数组（出桶）
    // 0 ~ maxValue - minValue
    for(let i=0; i<maxValue - minValue + 1; i++){
        if(countArray[i] > 0){
            for(let j=0; j<countArray[i]; j++){
                arr[p] = i + offset
                p++
            }
        }
    }
    return
}

// 示例用法
const unsortedArray = [6, 5, 3, 1, 8, 2, 5, 7, 7, 2, 4];
CountSort(unsortedArray);
console.log(unsortedArray); // 输出 [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8]