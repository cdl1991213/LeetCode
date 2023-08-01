/* 
    题目：在数组arr[L…R]范围上求最大值
*/
// 枚举
function Enumeration(arr, L=0, R=arr.length-1){
    // 剪枝
    if(arr == null || L > R){
        return null
    }else if(L == R){
        return arr[L]
    }
    
    // 最大值
    let maxValue = Number.MIN_SAFE_INTEGER

    // 0 ~ N-1
    for(let i=L; i<=R; i++){
        maxValue = maxValue > arr[i] ? maxValue : arr[i]
    }
    return maxValue
}

// 递归
function Recursive(arr, L=0, R=arr.length-1){
    const n = arr.length

    // 剪枝
    if(arr == null || n == 0 || L > R || L < 0 || R >= n){
        return null
    }else if(L == R){
        return arr[L]
    }

    // 递归体
    function RecursiveBody(arr, L=0, R=arr.length-1){
        // 基本情况：当L等于R时，数组只有一个元素，直接返回该元素即可
        if(L == R){
            return arr[L]
        }

        // 获取中间索引
        let midValueIndex = L + Math.floor( (R - L) / 2 )
        
        // 在左右分区递归
        let leftMaxValue = Recursive(arr, L, midValueIndex)
        let rightMaxValue = Recursive(arr, midValueIndex+1, R)
        return leftMaxValue > rightMaxValue ? leftMaxValue : rightMaxValue
    }

    return RecursiveBody(arr, L, R)
}

// 测试
const arr = [3, 9, 1, 7, 2, 8, 5];
const maxInRange = Recursive(arr, 0, arr.length - 1);
console.log("最大值为:", maxInRange); // 输出: 最大值为: 9

// 对数器
import { ComparisionOperator2 } from "../ComparisonOperator.js"
ComparisionOperator2(Recursive, Enumeration)