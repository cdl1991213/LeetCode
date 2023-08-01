/* 
    逆序对问题
    	在一个数组中，左边的数比右边的数大（非连续），则这两个数构成一个逆序对。请返回所有逆序对的数量
*/
// 枚举
function Enumeration(arr){
    const n = arr.length

    // 剪枝
    if(arr == null || n < 2){
        return 0
    }else if(n == 2){
        return arr[0] > arr[1] ? 1 : 0
    }

    // 逆序对数量
    let reverseOrderPairNum = 0 

    // 1 ~ N-1
    for(let i=1; i<n; i++){
        // i ~ 0
        for(let j=i-1; j>=0; j--){
            if(arr[i] < arr[j]){
                reverseOrderPairNum++
            }
        }
    }
    return reverseOrderPairNum
} 

function MergeSort(arr){
    const n = arr.length

    // 剪枝
    if(arr == null || n < 2){
        return 0 
    }else if(n == 2){
        return arr[0] > arr[1] ? 1 : 0
    }

    return RecursiveBody(arr)

    // 递归体
    function RecursiveBody(arr, L=0, R=n-1){
        // 基本情况：数组长度为1，认为有序
        if(L == R){
            return 0
        }

        // 获取中间索引
        let midValueIndex = L + Math.floor( (R - L) / 2 )
        
        let leftReverseOrderPairNum = RecursiveBody(arr, L, midValueIndex)
        let rightReverseOrderPairNum = RecursiveBody(arr, midValueIndex+1, R)

        return leftReverseOrderPairNum + rightReverseOrderPairNum + Merge(arr, L, midValueIndex, R)    
    }

    // 合并左右序列
    function Merge(arr, L, M ,R){
        // 逆序对数量
        let reverseOrderPairNum = 0 
        // 辅助数组
        let assistArr = new Array(R-L+1)
        // 左右指针、辅助数组指针
        let lp = L, rp = M+1, p = 0

        // 左右指针均未到顶
        while(lp <= M && rp <= R){
            if(arr[lp] <= arr[rp]){
                assistArr[p] = arr[lp]
                p++
                lp++
            }else{
                // 出现逆序对，且右序列的这个数将被放入辅助数组，不再进行比较。因此根据数组索引叠加逆序对数量
                reverseOrderPairNum += M - lp + 1
                assistArr[p] = arr[rp]
                p++
                rp++
            }
        }
        // 左指针未到顶
        while(lp <= M){
            assistArr[p] = arr[lp]
            p++
            lp++
        }
        // 右指针未到顶
        while(rp <= R){
            assistArr[p] = arr[rp]
            p++
            rp++
        }

        // 辅助数组覆盖原数组
        for(let i=0; i<R-L+1; i++){
            arr[L+i] = assistArr[i]
        }

        return reverseOrderPairNum
    }
}

// Example usage:
const nums = [6, 3, 8, 2, 9, 1];
const result = MergeSort(nums);
console.log(result); // Output: 9

// 对数器
import { ComparisionOperator2 } from "../ComparisonOperator.js"
ComparisionOperator2(MergeSort, Enumeration)