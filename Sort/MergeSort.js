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