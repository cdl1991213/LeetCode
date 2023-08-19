/* 
    荷兰国旗问题2
        给定一个数组arr，和一个数num
        请把<num的数放在数组左边，==num的数放在数组的中间，>num的数放在数组的右边
        要求额外空间复杂度O(1)，时间复杂度O(N)
*/
// 使用超过规定的额外空间复杂度
function Enumeration(arr, targetNum){
    const n = arr.length
    // 辅助数组
    let assistArr = new Array(n)
    // 辅助数组左指针、辅助数组右指针
    let lp = 0, rp = n-1

    // 剪枝
    if(arr == null || n < 2){
        return
    }

    // 0 ~ N-1
    for(let i=0; i<n; i++){
        if(arr[i] == targetNum){

        }else if(arr[i] < targetNum){
            assistArr[lp] = arr[i]
            lp++
        }else{
            assistArr[rp] = arr[i]
            rp--
        }
    }

    // 覆盖原数组
    // 0 ~ N-1
    for(let i=0; i<n; i++){
        if(assistArr[i] == null){
            arr[i] = targetNum
        }else{
            arr[i] = assistArr[i]
        }
    }
}

// 快排
function QuickSort(arr, targetNum){
    const n = arr.length
    // 小于区指针、大于区指针
    let lp = 0, rp = n - 1

    // 剪枝
    if(arr == null || n < 2){
        return
    }

    for(let i=0; i<=rp; i++){
        if(arr[i] == targetNum){

        }else if(arr[i] < targetNum){
            // 将数放入小于区
            Swap(arr ,i ,lp)
            lp++
        }else{
            // 将数放入大于区
            Swap(arr, i, rp)
            rp--
            i--
        }
    }
    return
}

// 交换数组两个位置的数
function Swap(arr ,index1, index2){
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