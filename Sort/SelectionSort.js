// 选择排序
function SelectionSort(arr){
    const n = arr.length

    // 剪枝，即去除无效边界值
    if(arr == null || n < 2){
        return
    }

    // 0 ~ N-2
    for(let i=0; i< n-1; i++){
        let minIndex = i

        // 在i ~ N-1上找最小值的索引
        for(let j=i+1; j< n; j++){
            minIndex = arr[minIndex] > arr[j] ? j : minIndex
        }
        
        // 把最小值放到i位置上
        swap(arr, minIndex, i)
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
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = SelectionSort(unsortedArray);
console.log(sortedArray); // 输出 [11, 12, 22, 25, 34, 64, 90]