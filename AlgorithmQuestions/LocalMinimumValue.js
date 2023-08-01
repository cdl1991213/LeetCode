/* 
    局部最小值问题（无序数组，且相邻值不相等）
    局部最小值的定义：
        1. arr[0]<arr[1]，即arr[0]为局部最小
        2. arr[n-1]<arr[n-2]，即arr[n-1]为局部最小
        3. arr[i-1]>arr[i] && arr[i]<arr[i+1]，即arr[i]为局部最小
    找出一个局部最小值的索引
*/
// 枚举
function Enumeration(arr){
    const n = arr.length

    // 剪枝
    if(arr == null || n < 2){
        return -1
    }

    if(arr[0] < arr[1]){
        return 0
    }else if(arr[n-1] < arr[n-2]){
        return n-1
    }

    // 1 ~ N-2
    for(let i=1; i<n-1; i++){
        if(arr[i] < arr[i-1] && arr[i] < arr[i+1]){
            return i
        }
    }
    return -1
}

// 二分法
function BinarySearch(arr){
    const n = arr.length

    // 剪枝
    if(arr == null || n < 2){
        return -1
    }

    // 判断头尾是否为局部最小值
    if(arr[0] < arr[1]){
        return 0
    }else if(arr[n-1] < arr[n-2]){
        return n-1
    }

    // 左右指针
    let lp = 0 , rp =n-1

    while(lp <= rp){
        let midValueIndex = lp + Math.floor( (rp -lp) / 2 )
        if(arr[midValueIndex] < arr[midValueIndex+1] && arr[midValueIndex] < arr[midValueIndex-1]){
            return midValueIndex
        }else if(arr[midValueIndex-1] < arr[midValueIndex]){
            // 左区间一定存在局部最小值
            rp = midValueIndex-1
        }else{
            // 右区间一定存在局部最小值
            lp = midValueIndex+1
        }
    }
    return -1
}


// 示例用法
const unsortedArray = [9, 6, 3, 4, 5, 7, 8];
const localMinimumIndex = BinarySearch(unsortedArray);
console.log(localMinimumIndex); // 输出 2 (对应元素为 3)

// 测试器
import { TestOperator1 } from "../TestOperator.js"
TestOperator1(BinarySearch)