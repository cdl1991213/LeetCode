// 希尔排序
export function HillSort(arr){
    const n = arr.length
    // 确定增量
    let increment = Math.floor(n / 2)

    // 剪枝
    if(arr == null || n < 2){
        return
    }

    // 对于不同增量，对每个分组进行插入排序
    while(increment > 0){
        // arr[increment] ~ N-1
        for(let i=increment; i<n; i++){
            
            // 对每个分组进行插入排序(这里使用未优化的插入排序)
            for(let j=i; j>=increment; j-=increment){
                if(arr[j-increment] > arr[j]){
                    swap(arr, j, j-increment)
                }else{
                    break
                }
            }
        }

        // 缩小增量
        increment = Math.floor(increment / 2)
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
// const sortedArray = HillSort(unsortedArray);
// console.log(sortedArray); // 输出 [11, 12, 22, 25, 34, 64, 90]