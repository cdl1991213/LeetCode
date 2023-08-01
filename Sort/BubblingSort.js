// 冒泡排序

/* 简单版 */
// function BubblingSort(arr){
//     const n = arr.length

//     // 剪枝
//     if(arr == null || n < 2){
//         return
//     }

//     // 0 ~ N-2
//     for(let i=0; i<n-1; i++){

//         // 在0 ~ N-1-i上找最大值
//         for(let j=0; j<n-1-i; j++){
//             if(arr[j] > arr[j+1]){
//                 // 把最大值向数组末尾换
//                 swap(arr, j, j+1)
//             }
//         }
//     }
//     return arr
// }

/* 优化外层循环 */
// function BubblingSort(arr){
//     const n = arr.length

//     // 剪枝
//     if(arr == null || n < 2){
//         return
//     }

//     // 0 ~ N-2
//     for(let i=0; i<n-1; i++){
//         // 记录本次循环是否冒泡
//         let swapped = false

//         // 在0 ~ N-1-i上找最大值
//         for(let j=0; j<n-1-i; j++){
//             if(arr[j] > arr[j+1]){
//                 // 把最大值向数组末尾换
//                 swap(arr, j, j+1)
//                 swapped = true
//             }
//         }

//         // 如果本次循环没有冒泡，数组有序
//         if(!swapped){ break }
//     }

//     return arr
// }

/* 优化内层循环 */
// function BubblingSort(arr){
//     const n = arr.length
//     // 记录内层循环的上限值
//     let thresholdIndex = n - 1

//     // 剪枝
//     if(arr == null || n < 2){
//         return
//     }

//     // 0 ~ N-2
//     for(let i=0; i<n-1; i++){
//         // 记录当前内层循环最后一次交换的位置
//         let lastIndex = 0

//         // 在0 ~ thresholdIndex上找最大值
//         for(let j=0; j<thresholdIndex; j++){
//             if(arr[j] > arr[j+1]){
//                 // 把最大值向数组末尾换
//                 swap(arr, j, j+1)
//                 lastIndex = j
//             }
//         }

//         // 最后一次交换的位置是 0和1
//         if(lastIndex == 0){ break }

//         // 更新最后一次交换的位置
//         thresholdIndex = lastIndex
//     }
//     return arr
// }

/* 最终版 */
export function BubblingSort(arr){
    const n = arr.length
    // 记录内层循环的上限值
    let thresholdIndex = n-1

    // 剪枝
    if(arr == null || n < 2){ return }

    // 0 ~ N-2
    for(let i=0; i<n-1; i++){
        // 记录本次循环是否发生冒泡
        let swapped = false
        // 记录本次循环最后一次交换发生的位置
        let lastIndex = 0

        // 在0 ~ N-1-i上找最大值
        for(let j=0; j<thresholdIndex; j++){
            if(arr[j] > arr[j+1]){
                // 把最大值向数组末尾换
                swap(arr, j, j+1)
                swapped = true
                lastIndex = j
            }
        }

        // 本次循环未冒泡, 数组已有序 || 最后一次交换的位置是 0和1
        if(!swapped || lastIndex == 0){ break }

        // 更新最后一次交换的位置
        thresholdIndex = lastIndex
    }
    return arr
}

// 交换数组中的两个数
function swap(arr, index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// 示例用法
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = BubblingSort(unsortedArray);
// console.log(sortedArray); // 输出 [11, 12, 22, 25, 34, 64, 90]