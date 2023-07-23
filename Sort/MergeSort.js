// 归并排序
export function MergeSort(arr, L=0, R=arr.length-1){
    // 小组只有一个元素或小组为空，即小组有序
    if(L == R || L > R){
        return arr
    }

    // 获取中间值索引，注意上限值溢出
    let midValueIndex = L + Math.floor( (R - L) / 2 )

    // 分别在左半部分和右半部分进行归并排序
    MergeSort(arr, L, midValueIndex)
    MergeSort(arr, midValueIndex + 1, R)

    // 合并左右序列
    Merge(arr, L, midValueIndex, R)

    return arr
}

// 合并两个序列
function Merge(arr, L, M, R){
    // 辅助数组
    let assistArr = new Array(R - L + 1)
    // 左右序列、辅助数组的指针
    let p1 = L, p2 = M + 1, p = 0

    // 左右序列的指针均未溢出
    while(p1 <= M && p2 <= R){
        if(arr[p1] <= arr[p2]){
            assistArr[p] = arr[p1]
            p += 1
            p1 += 1
        }else{
            assistArr[p] = arr[p2]
            p += 1
            p2 += 1
        }
    }

    // 左序列指针未溢出
    while(p1 <= M){
        assistArr[p] = arr[p1]
        p += 1
        p1 += 1
    }
    // 右序列指针未溢出
    while(p2 <= R){
        assistArr[p] = arr[p2]
        p += 1
        p2 += 1
    }

    // 覆盖原数组
    for(let i=0; i<assistArr.length; i++){
        arr[L + i] = assistArr[i]
    }
}

// 示例用法
// const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
// const sortedArray = MergeSort(unsortedArray);
// console.log(sortedArray); // 输出 [3, 9, 10, 27, 38, 43, 82]

/* 
小和问题
在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组的小和
*/
// 1. 暴力遍历
function minSumByViolence(arr){
    const n = arr.length
    // 记录最小和
    let minSum = 0
    
    // 剪枝
    if(arr == null || n < 2){
        return 0
    }
    
    // 1 ~ N-1
    for(let i=1; i<n; i++){
        // 0 ~ i-1
        for(let j=i-1; j>=0; j--){
            if(arr[j] < arr[i]){
                minSum += arr[j]
            }
        }
    }
    return minSum
}
// 2. 归并排序
function minSumByMergeSort(arr, L=0, R=arr.length-1){
    // 小组只有一个元素或小组为空，即小组有序
    if(L == R || L > R){
        // 小和为0
        return 0
    }

    // 获取中间值索引, 注意上限值溢出
    let midValueIndex = L + Math.floor( (R - L) / 2 )

    // 分别在左半部分和右半部分进行归并排序, 并累加小和
    let leftMinSum = minSumByMergeSort(arr, L, midValueIndex)
    let rightMinSum = minSumByMergeSort(arr, midValueIndex+1, R)

    // 合并左右序列, 并计算当前递归层次的小和
    let currentMinSum = mergeCalculateMinimumSum(arr, L, midValueIndex, R)

    // 向上传递小和
    return leftMinSum + rightMinSum + currentMinSum
}

// 合并两个序列，并计算最小和
function mergeCalculateMinimumSum(arr, L, M, R){
    // 记录小和
    let minSum = 0
    // 辅助数组
    let assistArr = new Array(R - L + 1)
    // 左右序列指针, 辅助数组指针
    let lp = L, rp = M + 1, p = 0

    // 左右指针均未溢出
    while(lp <= M && rp <= R){
        if(arr[lp] < arr[rp]){
            minSum += arr[lp] * (R - rp + 1)
            assistArr[p] = arr[lp]
            p+=1
            lp+=1
        }else{
            assistArr[p] = arr[rp]
            p+=1
            rp+=1
        }
    }
    // 右指针未溢出
    while(rp <= R){
        assistArr[p] = arr[rp]
        p+=1
        rp+=1
    }
    // 左指针未溢出
    while(lp <= M){
        assistArr[p] = arr[lp]
        p+=1
        lp+=1
    }

    // 将辅助数组覆盖原数组
    for(let i=0; i<assistArr.length; i++){
        arr[L+ i] = assistArr[i]
    }
    return minSum
}


// 示例用法
// const unsortedArray = [1,3,4,2,5];
// const minSum = minSumByMergeSort(unsortedArray);
// console.log(unsortedArray ,minSum); // 输出 16

/* 
    逆序对问题
    	在一个数组中，左边的数比右边的数大，则这两个数构成一个逆序对。请返回所有逆序对的数量
*/
// 暴力循环
export function reverseSequencePairByViolence(arr){
    const n = arr.length
    // 记录逆序对数量
    let reverseOrderPairQuantity = 0

    // 0 ~ N-2
    for(let i=0; i<n-1; i++){
        // i+1 ~ N-1
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[i]){
                reverseOrderPairQuantity += 1
            }
        }
    }
    return reverseOrderPairQuantity
}

// 归并排序
export function reverseSequencePairByMergeSort(arr, L=0, R=arr.length-1){
    // 子数组长度为1 或 原数组为空数组
    if(L >= R){
        return 0
    } 

    // 获取中间值索引, 注意数值上限溢出
    let midValueIndex = L + Math.floor( ( R - L ) / 2 )
    
    // 分别在左半部分和右半部分进行归并排序, 并计算逆序列数量
    let leftReverseOrderPairQuantity = reverseSequencePairByMergeSort(arr, L, midValueIndex)
    let rightReverseOrderPairQuantity = reverseSequencePairByMergeSort(arr, midValueIndex+1, R)

    // 合并左右序列，并计算当前合并过程中找到的逆序列数量
    let currentReverseOrderPairQuantity =  mergeComputeReverseSequence(arr, L, midValueIndex, R)
    return leftReverseOrderPairQuantity + rightReverseOrderPairQuantity + currentReverseOrderPairQuantity
}

// 合并左右序列，计算逆序列数量
function mergeComputeReverseSequence(arr, L, M, R){
    // 辅助数组
    let assistArr = new Array(R - L + 1)
    // 左右序列指针、辅助数组指针
    let lp = L, rp = M + 1, p = 0
    // 逆序列数量
    let ReverseOrderPairQuantity = 0

    // 左右序列均未溢出
    while(lp <= M && rp <= R){
        if(arr[lp] <= arr[rp]){
            assistArr[p] = arr[lp]
            p+=1
            lp+=1
        }else{
            // 累加逆序列数量
            ReverseOrderPairQuantity += M - lp + 1

            assistArr[p] = arr[rp]
            p+=1
            rp+=1
        }
    }
    // 左序列未溢出
    while(lp <= M){
        assistArr[p] = arr[lp]
        p+=1
        lp+=1
    }
    // 右序列未溢出
    while(rp <= R){
        assistArr[p] = arr[rp]
        p+=1
        rp+=1
    }

    // 辅助数组覆盖原数组
    for(let i=0; i<assistArr.length; i++){
        arr[L + i] = assistArr[i]
    }
    return ReverseOrderPairQuantity
}

// Example usage:
// const nums = [6, 3, 8, 2, 9, 1];
// const result = reverseSequencePairByMergeSort(nums);
// console.log(result); // Output: 9