// 插入排序

/* 简单版 */
// function InsertionSort(arr){
//     const n = arr.length

//     // 1 ~ N-1
//     for(let i=1; i<n; i++){
//         // 在i ~ 1内依次向前比较、交换
//         for(let j=i; j>0; j--){
//             if(arr[j] < arr[j-1]){
//                 swap(arr, j, j-1)
//             }
//         }
//     }
//     return arr
// }

/* 内层循环优化 */
export function InsertionSort(arr){
    const n = arr.length

    // 1 ~ N-1
    for(let i=1; i<n; i++){
        // 在i ~ 1内依次向前比较、交换
        for(let j=i; j>0; j--){
            if(arr[j] < arr[j-1]){
                swap(arr, j, j-1)
            }else{
                // 本次比较未发生交换，新元素已经找到适当位置
                break
            }
        }
    }
    return arr
}

// 交换数组中的两个数
function swap(arr, index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}

// 示例用法
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = InsertionSort(unsortedArray);
// console.log(sortedArray); // 输出 [11, 12, 22, 25, 34, 64, 90]