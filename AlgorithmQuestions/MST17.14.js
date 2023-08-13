/* 
    面试题 17.14. 最小K个数
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
/* 计数排序 */
// var smallestK = function(arr, k) {
//     const n = arr.length
//     // 剪枝
//     if(n == 0 || k == 0){
//         return []
//     }else if(n <= k){
//         return arr
//     }

//     // 计数排序
//     CountSort(arr)
//     // 输出前K个数
//     return arr.slice(0, k)

//     function CountSort(arr){
//         // 计算数组极值
//         let maxValue = Number.MIN_SAFE_INTEGER, minValue = Number.MAX_SAFE_INTEGER
//         for(let i=0; i<n; i++){
//             maxValue = maxValue > arr[i] ? maxValue : arr[i]
//             minValue = minValue < arr[i] ? minValue : arr[i]
//         }
//         // 计数数组（桶）
//         let CountArray = new Array(maxValue - minValue + 1).fill(0)
//         // 计数数组索引偏移量
//         let offset = minValue
//         // 入桶
//         for(let i=0; i<n; i++){
//             CountArray[ arr[i] - offset ]++
//         }
//         // 出桶指针
//         let p = 0
//         // 出桶
//         for(let i=0; i<maxValue- minValue + 1; i++){
//             if(CountArray[i] > 0){
//                 for(let j=0; j<CountArray[i]; j++){
//                     arr[p] = i + offset
//                     p++
//                     if(p == k){
//                         return
//                     }
//                 }
//             }
//         }
//     }
// };

/* 小根堆 */
// var smallestK = function(arr, k){
//     const n = arr.length
//     // 剪枝
//     if(n == 0 || k == 0){
//         return []
//     }else if(n <= k){
//         return arr
//     }

//     // 堆排序，只需经历K次将堆顶的数移至数组末尾
//     HeapSort(arr)

//     // 返回末尾的K个数
//     return arr.slice(n-k ,n)

//     function HeapSort(arr){
//         // 小根堆长度
//         let heapSize = n
//         // 最小k个数
//         let count = k

//         // Heapinsert
//         // for(let i=0; i<n; i++){
//         //     Heapinsert(arr, i)
//         // }
//         // 数组全部插入，从上往下调整，将数组构造为小根堆
//         for(let i=n-1; i>=0; i--){
//             Heapify(arr, i, n)
//         }

//         // 将堆顶移至末尾
//         Swap(arr, 0, --heapSize)
//         count--

//         // 循环
//         while(count > 0){
//             // Heapify
//             Heapify(arr, 0, heapSize)
//             // 将堆顶移至末尾
//             Swap(arr, 0, --heapSize)
//             count--
//         }
//     }

//     // 从下往上插入,插入的元素在数组中的索引为index
//     // function Heapinsert(arr, index){
//     //     while(arr[index] < arr[ parseInt((index-1) / 2) ]){
//     //         Swap(arr, index, parseInt((index-1) / 2))
//     //         index = parseInt((index-1) / 2)
//     //     }
//     // }
    
//     // 从上往下调整,调整的元素在数组中的索引为index,下界为heapSize
//     function Heapify(arr, index, heapSize){
//         // 获取左孩子
//         let leftChild = index * 2 + 1
        
//         while(leftChild < heapSize){
//             // 获取最小孩子
//             let minChild = (leftChild + 1 < heapSize) && (arr[leftChild + 1] < arr[leftChild]) ? leftChild + 1 : leftChild

//             if(arr[index] > arr[minChild]){
//                 Swap(arr, index, minChild)
//                 index = minChild
//                 leftChild = index * 2 + 1
//             }else{
//                 break
//             }
//         }
//     }

//     function Swap(arr, index1, index2){
//         let tmp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = tmp
//     }

// }

/* 长度为K的大根堆 */
// var smallestK = function(arr, k){
//     const n = arr.length
//     // 剪枝
//     if(n == 0 || k == 0){
//         return []
//     }else if(n <= k){
//         return arr
//     }    

//     // 堆排序, 始终维护一个长度为K的大根堆
//     HeapSort(arr)

//     // 返回前k个数(大根堆中的数)
//     return arr.slice(0, k)

//     function HeapSort(arr){
//         // Heapinsert, 将前k个数构造为大根堆
//         // for(let i=0; i<k; i++){
//         //     Heapinsert(arr, i)
//         // }
//         // 数组全部插入，从上往下调整，将数组构造为大根堆
//         for(let i=k-1; i>=0; i--){
//             Heapify(arr, i, k)
//         }
//         // 将数组剩余的数依次与堆顶比较
//         for(let i=k; i<n; i++){
//             if(arr[0] > arr[i]){
//                 Swap(arr, 0, i)
//                 // 比较后, Heapify
//                 Heapify(arr, 0, k)
//             }
//         }
//     }

//     // 从下往上插入, 需要插入的数在数组中的索引为index
//     // function Heapinsert(arr, index){
//     //     while(arr[index] > arr[ parseInt((index - 1) / 2) ]){
//     //         Swap(arr, index, parseInt((index - 1) / 2))
//     //         index = parseInt((index - 1) / 2)
//     //     }    
//     // }

//     // 从上往下调整, 需要调整的数在数组中的索引为index, 下界为heapSize
//     function Heapify(arr, index, heapSize){
//         // 获取左孩子
//         let leftChild = index * 2 + 1
        
//         while(leftChild < heapSize){
//             // 获取最大孩子
//             let maxChild = (leftChild + 1 < heapSize) && (arr[leftChild + 1] > arr[leftChild]) ? leftChild + 1 : leftChild

//             if(arr[index] < arr[maxChild]){
//                 Swap(arr, index, maxChild)
//                 index = maxChild
//                 leftChild = index * 2 + 1
//             }else{
//                 break
//             }
//         }
//     }

//     function Swap(arr, index1, index2){
//         let tmp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = tmp
//     }
// }


/* 优化快排 */
var smallestK = function(arr, k){
    const n = arr.length
    // 剪枝
    if(n == 0 || k == 0){
        return []
    }else if(n <= k){
        return arr
    }
    
    // 快排, 使小于区的长度为k
    QuickSort(arr)

    // 返回前k个数
    return arr.slice(0, k)

    function QuickSort(arr){
        // 递归体
        RecursiveBody(arr)
        return
    }

    function RecursiveBody(arr, L=0, R=n-1){
        // 划分大于、小于区
        let [lp, rp] = Partition(arr, L, R)
        // 判断当前小于区数量，选择对小于区还是大于区继续进行快排
        if(lp+1 < k && rp >= k){
            // 前k个数为最小K个数
            return
        }else if(lp + 1 >= k){
            // 当前小于区多于k个数，则对小于区进行递归排序
            RecursiveBody(arr, L, lp)
        }else{
            // 当前小于区+等于区少于k个数，则对大于区进行递归排序
            RecursiveBody(arr, rp, R)
        }
    }

    // 划分小于区，大于区
    function Partition(arr, L, R){
        // 小于区、大于区指针
        let lp = L-1, rp = R+1
        // 等概率随机选择位置作为基准位置
        Swap(arr, L, L + Math.floor(Math.random() * (R - L + 1)))
        // 基准值
        let baseValue = arr[L]

        for(let i=L+1; i<rp; i++){
            if(arr[i] == baseValue){
                // pass
            }else if(arr[i] < baseValue){
                Swap(arr, i, ++lp)
            }else{
                Swap(arr, i--, --rp)
            }
        }
        return [lp, rp]
    }

    function Swap(arr, index1, index2){
        let tmp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = tmp
    }
}

let arr = [1,3,5,7,2,4,6,8], k = 4
console.log(
    smallestK(arr, k)
)