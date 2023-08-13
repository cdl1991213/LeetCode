/* 
    973. 最接近原点的 K 个点
*/
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
/* 优化快排 */
// var kClosest = function(points, k) {
//     const n = points.length
//     // 剪枝
//     if(n == k){
//         return points
//     }   

//     let assistArray = new Array(n)
//     for(let i=0; i<n; i++){
//         assistArray[i] = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)
//     }

//     // 优化快排
//     QuickSort(assistArray)

//     return points.slice(0, k)

//     function QuickSort(arr){
//         RecursiveBody(arr)
//         return
//     }

//     // 递归体
//     function RecursiveBody(arr, L=0, R=n-1){
//         // 基本情况
//         if(L == R){
//             return
//         }
//         let [lp, rp] = Partition(arr, L, R)
//         // 判断lp、rp与k的关系
//         // 对小于区或大于区继续递归
//         if(lp < k && rp >= k){
//             return
//         }else if(lp >= k){
//             RecursiveBody(arr, L, lp)
//         }else{
//             RecursiveBody(arr, rp, R)
//         }
//     }

//     function Partition(arr, L, R){
//         // 划分小于区、大于区
//         let lp = L-1, rp = R+1
//         // 等概率随机选择位置作为基准位置
//         let probabilisticPosition = L + Math.floor( Math.random() * (R-L+1) )
//         Swap(arr, L, probabilisticPosition)
//         Swap(points, L, probabilisticPosition)
//         // 基准值
//         let baseValue = arr[L]

//         for(let i=L+1; i<rp; i++){
//             if(arr[i] == baseValue){
//                 // pass
//             }else if(arr[i] < baseValue){
//                 Swap(arr, i, ++lp)
//                 Swap(points, i, lp)
//             }else{
//                 Swap(arr, i, --rp)
//                 Swap(points, i, rp)
//                 i--
//             }
//         }
//         return [lp, rp]
//     }

//     function Swap(arr, index1, index2){
//         let tmp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = tmp
//     }
// };

/* 大根堆 */ 
var kClosest = function(points, k){
    const n = points.length
    // 剪枝
    if(n == k){
        return points
    }   

    let assistArray = new Array(n)
    for(let i=0; i<n; i++){
        assistArray[i] = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)
    }

    // 始终维护一个长度为k的大根堆
    HeapSort(assistArray)

    // 输出大根堆
    return points.slice(0, k)
    
    function HeapSort(arr){
        // 从下向上插入，创建一个长度为k的大根堆
        for(let i=0; i<k; i++){
            Heapinsert(arr, i)
        }
        // 数组全部插入，从上往下调整，将数组构造为大根堆
        // !!!!!!!使用这种写法 时间和空间都明显下降, 数据量越大,效果越明显!!!!!!!
        // for(let i=k-1; i>=0; i--){
        //     Heapify(arr, i, k)
        // }
        // 遍历剩余数组，比较堆顶
        for(let i=k; i<n; i++){
            if(arr[i] < arr[0]){
                Swap(arr, 0 ,i)
                Swap(points, 0 ,i)
                // 从上而下调整大根堆
                Heapify(arr, 0, k)
            }
        }
    }
    
    // 从下而上插入，创建大根堆，插入的元素在数组中的索引为index
    function Heapinsert(arr, index){
        while(arr[index] > arr[Math.floor((index - 1) / 2)]){
            Swap(arr, index, Math.floor((index - 1) / 2))
            Swap(points, index, Math.floor((index - 1) / 2))
            index = Math.floor((index - 1) / 2)
        }
    }

    // 自上而下调整，需要调整的位置为index, 下界为heapSize
    function Heapify(arr, index, heapSize){
        // 获取左孩子
        let leftChild = index * 2 + 1 
        while(leftChild < heapSize){
            // 获取最大孩子
            let maxChild = (leftChild + 1 < heapSize) && (arr[leftChild + 1] > arr[leftChild]) ? leftChild + 1 : leftChild

            if(arr[index] < arr[maxChild]){
                Swap(arr, index , maxChild)
                Swap(points, index , maxChild)
                index = maxChild
                leftChild = index * 2 + 1
            }else{
                break
            }
        }
    }

    function Swap(arr, index1, index2){
        let tmp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = tmp
    }
}

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))