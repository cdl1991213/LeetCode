/* 
    小和问题
    在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组的小和
*/
// 枚举
function Enumeration(arr){
    const n = arr.length
    
    // 剪枝
    if(arr == null || n < 2){
        return 0
    }else if(n == 2){
        return arr[1] > arr[0] ? arr[0] : 0
    }

    // 小和
    let smallSum = 0

    // 1 ~ N-1
    for(let i=1; i<n; i++){
        // 0 ~ i-1
        for(let j=0; j<i; j++){
            if(arr[j] < arr[i]){
                smallSum += arr[j]
            }
        }
    }

    return smallSum
}

// 归并
function MergeSort(arr){
    const n = arr.length

    // 剪枝
    if(arr == null || n < 2){
        return 0
    }else if(n == 2){
        return arr[1] > arr[0] ? arr[0] : 0
    }

    return RecursiveBody(arr)

    // 递归体
    function RecursiveBody(arr, L=0, R=n-1){
        // 基本情况:数组长度为1，默认有序，且不存在小和
        if(L == R){
            return 0
        }

        // 获取中间索引
        let midValueIndex = L + Math.floor( (R-L) / 2 )

        // 对左右序列分别进行归并，使左右序列有序
        let leftSmallSum = RecursiveBody(arr, L , midValueIndex)
        let rightSmallSum = RecursiveBody(arr, midValueIndex+1, R)

        // 合并左右序列
        return leftSmallSum + rightSmallSum + Merge(arr, L, midValueIndex, R)
    }

    // 合并左右序列
    function Merge(arr, L ,M ,R){
        // 辅助数组
        let assistArr = new Array(R-L+1)
        // 左右指针、辅助数组指针
        let lp = L, rp = M+1, p = 0
        // 小和
        let smallSum = 0

        // 左右指针均未到顶
        while(lp <= M && rp <= R){
            if(arr[lp] < arr[rp]){
                smallSum += arr[lp] * ( R - rp + 1 )
                assistArr[p] = arr[lp]
                p++
                lp++
            }else{
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

        // 覆盖原始数组
        for(let i=0; i<R-L+1; i++){
            arr[L+i] = assistArr[i]
        }

        return smallSum
    }

    
}

// 示例用法
const unsortedArray = [1,3,4,2,5];
const minSum = MergeSort(unsortedArray);
console.log(unsortedArray ,minSum); // 输出 16

// 对数器
import { ComparisionOperator2 } from "../ComparisonOperator.js"
ComparisionOperator2(MergeSort, Enumeration)