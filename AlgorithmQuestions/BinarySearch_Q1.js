/* 
    题目：在一个有序数组中，找某个数是否存在 
*/
// 暴力遍历
function Enumeration(arr, targetNum){
    const n = arr.length - 1
    
    // 0 ~ N-1
    for(let i=0; i<n; i++){
        if(arr[i] == targetNum){
            return true
        }else if(arr[i] > targetNum){
            return false
        }
    }
    return false
}

// 双指针
function BinarySearch(arr, targetNum){
    const n = arr.length
    // 左右双指针 
    let L = 0, R = n - 1

    // 剪枝
    if(arr == null || n == 0){
        return false
    }else if(n == 1){
        return arr[0] == targetNum ? true : false
    }
    
    while(L <= R){
        // 获取中间索引
        let midValueIndex = L + Math.floor( (R - L) / 2 )

        if(arr[midValueIndex] == targetNum){
            return true
        }else if(arr[midValueIndex] < targetNum){
            L = midValueIndex + 1
        }else{
            R = midValueIndex - 1
        }
    }

    return false
}


// // 示例用法
const sortedArray = [11, 12, 22, 25, 34, 64, 90];
const targetNumber = 25;
const isFound = BinarySearch(sortedArray, targetNumber);
console.log(isFound); // 输出 true

// 引入对数器测试
import { ComparisionOperator3 } from "../ComparisonOperator.js"
ComparisionOperator3(BinarySearch, Enumeration)