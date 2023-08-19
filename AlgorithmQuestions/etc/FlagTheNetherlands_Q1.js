/* 
    荷兰国旗问题1
        给定一个数组arr，和一个数num
        请把<=num的数放在数组左边，>num的数放在数组的右边
        要求额外空间复杂度O(1)，时间复杂度O(N)
*/
// 使用超过规定的额外空间复杂度
function Enumeration(arr, targetNum){
    let n = arr.length
    // 辅助数组
    let assistArr = new Array(n)
    // 辅助数组左右指针
    let L = 0, R = n - 1

    // 剪枝
    if(arr == null || n < 2){
        return
    }

    // 0 ~ N-1
    for(let i=0; i<n; i++){
        if(arr[i] <= targetNum){
            assistArr[L] = arr[i]
            L += 1
        }else{
            assistArr[R] = arr[i]
            R -= 1
        }
    }
    
    // 覆盖原数组
    // 0 ~ N-1
    for(let i=0; i<n; i++){
        arr[i] = assistArr[i]
    }
}

// 快排
function QuickSort(arr, targetNum){
    const n = arr.length
    // 小于区指针、大于区指针
    let lp = 0, rp = n-1

    // 剪枝
    if(arr == null || n < 2){
        return arr
    }

    // 0 ~ N-1
    for(let i=0; i<=rp; i++){
        if(arr[i] > targetNum){
            // 将当前数放入大于区
            Swap(arr, i, rp)
            rp--
            i--
        }else{
            // 将当前数放入小于区
            Swap(arr, i, lp)
            lp++   
        }
    }
}

// 交换数组两个位置的值
function Swap(arr, index1, index2){
    let tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp
}

// 示例用法
const unsortedArray = [5, 2, 9, 1, 5, 6];
QuickSort(unsortedArray, 5);
console.log(unsortedArray); // 输出 [1, 2, 5, 5, 6, 9]

// 测试器
import { TestOperator2 } from "../TestOperator.js"
TestOperator2(QuickSort)