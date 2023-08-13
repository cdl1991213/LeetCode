/* 
    剑指 Offer 40. 最小的k个数
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
/* 基础快排 */
// var getLeastNumbers = function (arr, k) {
//     const n = arr.length;

//     // 剪枝
//     if (arr == null || n < 1 || n < k) {
//         return [];
//     } else if (n == k) {
//         return arr;
//     }

//     // 快速排序
//     QuickSort(arr);

//     // 输出前k个数
//     return arr.slice(0, k);

//     function QuickSort(arr) {
//         const n = arr.length;
//         // 已完成剪枝

//         RecursiveBody(arr);
//         return;
//     }

//     // 递归体
//     function RecursiveBody(arr, L = 0, R = n - 1) {
//         // 基本情况：子数组长度为1，无需排序
//         if (L == R) {
//             return;
//         }

//         // 划分小于区、大于区
//         console.log([L, R]);
//         let [lp, rp] = Partition(arr, L, R);

//         // 对小于区，大于区递归进行快排
//         if (lp >= L) {
//             RecursiveBody(arr, L, lp);
//         }
//         if (rp <= R) {
//             RecursiveBody(arr, rp, R);
//         }
//     }

//     // 划分小于区、大于区
//     function Partition(arr, L, R) {
//         // 等待率随机选择位置为基准值
//         Swap(arr, L, L + Math.floor(Math.random() * (R - L + 1)));
//         // 获取基准值
//         let baseValue = arr[L];
//         // 小于区指针、大于区指针
//         let lp = L - 1,
//             rp = R + 1;

//         for (let i = L + 1; i < rp; i++) {
//             if (arr[i] < baseValue) {
//                 Swap(arr, i, ++lp);
//             } else if (arr[i] == baseValue) {
//                 // pass
//             } else {
//                 Swap(arr, i, --rp);
//                 i--;
//             }
//         }
//         return [lp, rp];
//     }

//     // 交换数组两索引位置
//     function Swap(arr, index1, index2) {
//         let tmp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = tmp;
//     }
// };

/* 
    优化快排
    我们并不需要让数组完全有序，只需要找到一个 基准值的索引==k
    这样，我们就可以得到(0 ~ k-1)k个比基准值小的数
    依次输出这些数 
*/
// var getLeastNumbers = function(arr, k){
//     const n = arr.length
//     // 剪枝
//     if(arr == null || n < 1 || n < k || k < 1){
//         return []
//     }else if(n == k){
//         return arr
//     }

//     // 优化快排
//     OptimizeQuickSort(arr)

//     // 输出前k个值
//     return arr.slice(0, k)

//     // 优化快排
//     function OptimizeQuickSort(arr){
//         const n = arr.length
//         // 无需剪枝

//         RecursiveBody(arr)
//         return
//     }

//     // 递归体
//     function RecursiveBody(arr, L=0, R=n-1){
//         // 基本情况：数组长度为1
//         if(L == R){
//             return
//         }

//         // 划分小于区、大于区
//         let [lp, rp] = Partition(arr, L, R)

//         if((lp+1 < k && rp >= k) || (lp+1 == k)){
//             // 前k个数为最小的k个数
//             return
//         }else if(rp < k){
//             // 当前小于区不足k个数，则对大于区递归进行排序
//             RecursiveBody(arr, rp, R)
//         }else{
//             // 当前小于区多于k个数，则对小于区进行递归排序
//             RecursiveBody(arr, L, lp)
//         }
//     }

//     function Partition(arr, L, R){
//         // 等概率随机选择位置作为基准位置
//         Swap(arr, L, L + Math.floor( Math.random() * (R-L+1) ))
//         // 获取基准值
//         let baseValue = arr[L]
//         // 小于区指针、大于区指针
//         let lp = L-1, rp = R+1

//         for(let i=L+1; i<rp; i++){
//             if(arr[i] == baseValue){
//                 // pass
//             }else if(arr[i] < baseValue){
//                 Swap(arr, i, ++lp)
//             }else{
//                 Swap(arr, i, --rp)
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
// }

/* 计数排序 */
// var getLeastNumbers = function(arr, k){
//     const n = arr.length
//     // 剪枝
//     if (arr == null || n < 1 || n < k) {
//         return [];
//     } else if (n == k) {
//         return arr;
//     }

//     // 计数排序
//     CountSort(arr)

//     // 输出前k个数
//     return arr.slice(0, k)

//     function CountSort(arr){
//         const n = arr.length

//         // 记录数组最大值、最小值
//         let maxValue = Number.MIN_SAFE_INTEGER, minValue = Number.MAX_SAFE_INTEGER
//         for(let i=0; i<n; i++){
//             maxValue = maxValue > arr[i] ? maxValue : arr[i]
//             minValue = minValue < arr[i] ? minValue : arr[i]
//         }

//         // 计数数组（桶）
//         let countArray = new Array(maxValue - minValue + 1).fill(0)
//         // 数组元素索引偏移量
//         let offset = minValue

//         // 入桶
//         for(let i=0; i<n; i++){
//             countArray[arr[i]-offset]++
//         }

//         // 出桶指针
//         let p =0
//         // 出桶
//         for(let i=0; i<k; i++){
//             if(countArray[i] > 0){
//                 for(let j=0; j<countArray[i]; j++){
//                     arr[p] = i+offset
//                     p++
//                 }
//             }
//         }
//         return
//     }
// }

/* 
    堆排序
    在构建小根堆后，只需要弹出k次堆顶节点即可 
*/
var getLeastNumbers = function(arr, k){
    const n = arr.length 
    // 剪枝
    if (arr == null || n < 1 || n < k) {
        return [];
    } else if (n == k) {
        return arr;
    }

    // 堆排序，将k个堆顶交换至数组末尾
    HeapSort(arr)

    // 输出数组末尾k个数
    return arr.slice(n-k ,n)

    // 堆排序
    function HeapSort(arr){
        const n = arr.length
        // 无需剪枝

        // Heapinsert
        for(let i=0; i<n; i++){
            Heapinsert(arr, i)
        }

        // 小根堆长度
        let heapSize = n
        // 移除最小值
        Swap(arr, 0, --heapSize)

        // 循环
        while(heapSize > 0){
            // Heapify
            Heapify(arr, 0, heapSize)
            // 移除最小值
            Swap(arr, 0, --heapSize)
        }
    }

    // HeapInsert, 插入的数在index位置, 向上移动
    function Heapinsert(arr, index){
        while(arr[index] < arr[ parseInt( (index - 1) / 2 ) ]){
            Swap(arr, index, parseInt( (index - 1) / 2 ))
            index = parseInt( (index - 1) / 2 )
        }
    }

    function Swap(arr, index1, index2){
        let tmp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = tmp
    }

    // Heapify, 交换的数在index位置, 向下调整
    function Heapify(arr, index, heapSize){
        // 获取左孩子
        let leftChild = index * 2 + 1

        while(leftChild < heapSize){
            // 获取左右孩子最小值(需要判断右孩子是否存在)
            let minChild = (leftChild + 1 < heapSize) && (arr[leftChild] > arr[leftChild + 1]) ? leftChild + 1 : leftChild

            // 向下调整
            if(arr[index] > arr[minChild]){
                Swap(arr, index, minChild)
                index = minChild
                leftChild = index * 2 + 1
            }else{
                break
            }
        }
        return
    }
}



/* 测试 */
// 测试示例
let arr = [3, 2, 1], k = 2
console.log(getLeastNumbers(arr, k))

// 测试器
// import { TestOperator2 } from "../TestOperator.js";
// TestOperator2(getLeastNumbers);
