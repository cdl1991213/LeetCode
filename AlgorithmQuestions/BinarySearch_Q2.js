/* 
    题目：在一个有序数组中，找>=某个数最左侧的位置
*/
// 枚举
function Enumeration(arr, targetNum){
    const n = arr.length

    // 剪枝
    if(arr == null || n == 0){
        return n
    }else if(n == 1){
        return arr[0] >= targetNum ? 0 : 1
    }

    // 0 ~ N-1
    for(let i=0; i<n; i++){
        if(arr[i] >= targetNum){
            return i
        }
    }
    return n
}

// 二分法
function BinarySearch(arr, targetNum){
    let n = arr.length
    // 双指针
    let L = 0, R = n - 1
    // 最左侧位置
    let leftmostPosition = n

    // 剪枝
    if(arr == null || n == 0){
        return leftmostPosition
    }else if(n == 1){
        return arr[0] >= targetNum ? 0 : 1
    }

    while(L <= R){
        // 获取中间索引
        let midValueIndex = L + Math.floor( (R - L) / 2 )

        if(arr[midValueIndex] < targetNum){
            L = midValueIndex + 1
        }else{
            leftmostPosition = midValueIndex
            R = midValueIndex - 1
        }
    }
    return leftmostPosition
}

// // 示例用法
const sortedArray = [2, 3, 5, 7, 10, 13, 20];
const targetNumber = 8;
const leftmostPosition = BinarySearch(sortedArray, targetNumber);
console.log(leftmostPosition); // 输出 4 (对应元素为 10)

// 对数器测试
import { ComparisionOperator3 } from "../ComparisonOperator.js"
ComparisionOperator3(BinarySearch , Enumeration)