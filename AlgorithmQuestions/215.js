/* 
    215. 数组中的第K个最大元素
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* 计数排序 */
// var findKthLargest = function(nums, k) {
//     const n = nums.length
    
//     // 计数排序
//     CountSort(nums)

//     // 输出第n-k个
//     return nums[n - k]

//     function CountSort(nums){
//         const n = nums.length
//         // 获取最大值和最小值
//         let maxValue = Number.MIN_SAFE_INTEGER, minValue = Number.MAX_SAFE_INTEGER
//         for(let i=0; i<n; i++){
//             maxValue = maxValue > nums[i] ? maxValue : nums[i]
//             minValue = minValue < nums[i] ? minValue : nums[i]
//         }
//         // 计数数组（桶）
//         let CountArray = new Array(maxValue - minValue + 1).fill(0)
//         // 计数数组索引偏移量
//         let offset = minValue
//         // 入桶
//         for(let i=0; i<n; i++){
//             CountArray[ nums[i] - offset ]++
//         }
//         // 出桶指针
//         let p = 0
//         // 出桶
//         for(let i=0; i<maxValue-minValue+1; i++){
//             if(CountArray[i] > 0){
//                 for(let j=0; j<CountArray[i]; j++){
//                     nums[p] = i + offset
//                     p++
//                 }
//             }
//         }
//         return
//     }
// };

/* 堆排序 */
// var findKthLargest = function(nums, k){
//     // 堆排序，始终维护一个长度为k的小根堆
//     HeapSort(nums)
    
//     // 返回长度为k的小根堆的堆顶
//     return nums[0]

//     function HeapSort(nums){
//         const n = nums.length
//         // 始终维护一个长度为k的小根堆
//         let heapSize = k

//         // Heapinsert
//         // 取k个数构造小根堆
//         // if(k > 1){
//         //     for(let i=0; i<k; i++){
//         //         Heapinsert(nums, i)
//         //     }
//         // }
//         // 数组全部插入，从上往下调整，将数组构造为大根堆
//         for(let i=k-1; i>=0; i--){
//             Heapify(nums, i, heapSize)
//         }


//         // 遍历剩余数组
//         for(let i=k; i<nums.length; i++){
//             if(nums[i] > nums[0]){
//                 // 如果大于堆顶，就与堆顶交换
//                 nums[0] = nums[i]
//                 // 堆顶向下调整
//                 Heapify(nums, 0, heapSize)
//             }else{
//                 // 如果小于堆顶，则说明当前元素不可能成为TopK元素
//                 // pass
//             }
//         }
//         return
//     }

//     function Swap(arr, index1, index2){
//         let tmp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = tmp
//     }

//     // 从下往上插入，插入的数在数组中的索引为index
//     // function Heapinsert(arr, index){
//     //     while(arr[index] < arr[ parseInt((index - 1) / 2) ]){
//     //         Swap(arr, index, parseInt((index - 1) / 2))
//     //         index = parseInt((index - 1) / 2)
//     //     }
//     //     return
//     // }

//     // 从上往下调整，要调整的数在数组中的索引为index
//     function Heapify(arr, index, heapSize){
//         // 获取左孩子
//         let leftChild = index * 2 + 1

//         // 循环向下调整
//         while(leftChild < heapSize){
//             // 获取最大孩子
//             let minChild = (leftChild + 1 < heapSize) && (arr[leftChild] > arr[leftChild + 1]) ? leftChild + 1 : leftChild

//             if(arr[index] > arr[minChild]){
//                 Swap(arr, index, minChild)
//                 index = minChild
//                 leftChild = index * 2 + 1
//             }else{
//                 break
//             }
//         }
//         return
//     }
// }

/* 快速排序 */
// var findKthLargest = function(nums, k){
//     const n = nums.length
    
//     // 快速排序，小于区长度为k
//     QuickSort(nums)

//     // 第k大，正序数组中的第n-k位
//     return nums[n-k]

//     function QuickSort(nums){
//         const n = nums.length

//         RecursiveBody(nums)
//         return
//     }

//     // 划分大于区、小于区
//     function Partition(nums, L, R){
//         // 等概率随机选择位置作为基准值
//         Swap(nums, L, L + Math.floor(Math.random() * (R - L + 1)))
//         // 基准值
//         let baseValue = nums[L]
//         // 小于区、大于区指针
//         let lp = L-1, rp = R+1
        
//         for(let i=L+1; i<rp; i++){
//             if(nums[i] == baseValue){
//                 // pass
//             }else if(nums[i] < baseValue){
//                 Swap(nums, i, ++lp)
//             }else{
//                 Swap(nums, i, --rp)
//                 i--
//             }
//         }
//         return [lp, rp]
//     }

//     // 递归体
//     function RecursiveBody(nums, L=0, R=nums.length-1){
//         // 基本情况：数组长度为1
//         if(L == R){
//             return
//         }

//         // 划分大于区、小于区
//         let [lp, rp] = Partition(nums, L, R)

//         // 找出第k大的数
//         if(lp < n-k && rp > n-k){
//             // 第K大的数落在lp+1 ~ rp-1(即等于区)
//             return
//         }else if( lp >= n-k){
//             // 第k大的数落在小于区
//             RecursiveBody(nums, L, lp)
//         }else{
//             // 第k大的数落在大于区
//             RecursiveBody(nums, rp, R)
//         }
//     }

//     function Swap(arr, index1, index2){
//         let tmp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = tmp
//     }
// }

console.log(findKthLargest([3,2,1,5,6,4], 2))