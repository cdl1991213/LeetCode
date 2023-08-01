// 堆排序

export function HeapSort(arr){
    const n = arr.length
    // 大根堆长度
    let heapSize = n

    // 剪枝
    if(arr == null || n < 2){
        return arr
    }

    // 每次插入一个数组元素，从下往上插入，不断扩充大根堆长度，将数组构造为大根堆
    // for(let i=0; i<n; i++){
    //     HeapInsert(arr, i)
    // }
    // 数组全部插入，从上往下调整，将数组构造为大根堆
    for(let i=n-1; i>=0; i--){
        Heapify(arr, i, n)
    }
    
    // 移出最大值，将根节点和末尾节点交换
    Swap(arr, 0, --heapSize)

    // 当大根堆长度为1时，默认有序
    while(heapSize > 1){
        // 从上往下调整，将剩余的数组构造为大根堆
        Heapify(arr, 0, heapSize)
        
        // 移出最大值，将根节点和末尾节点交换
        Swap(arr, 0, --heapSize)
    }
    return arr
}

// HeapInsert, 插入的数在index位置, 向上移动
function HeapInsert(arr, index){
    // 向上移动，index = 0时，parseInt( (index - 1) / 2 ) = 0。循环停止
    while(arr[index] > arr[ parseInt((index - 1) / 2) ]){
        Swap(arr, index, parseInt((index - 1) / 2 ))
        index = parseInt((index - 1) / 2 )
    }
}

// Heapify, 交换的数在index位置, 向下调整
function Heapify(arr, index, heapSize){
    // 获取左孩子
    let leftChild = index * 2 + 1

    while(leftChild < heapSize){
        // 获取左右孩子最大值(需要判断右孩子是否存在)
        let maxChild = ( arr[leftChild] < arr[leftChild + 1] ) && ( leftChild + 1 < heapSize ) ? leftChild + 1 : leftChild

        // 向下调整
        if(arr[index] < arr[maxChild]){
            Swap(arr, index, maxChild)
            index = maxChild
            leftChild = index * 2 + 1
        }else{
            break
        }
    }
}

function Swap(arr, index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// 示例用法
// const unsortedArray = [6, 5, 3, 1, 8, 7, 2, 4];
// const sortedArray = HeapSort(unsortedArray);
// console.log(sortedArray); // 输出 [1, 2, 3, 4, 5, 6, 7, 8]