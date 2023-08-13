/* 
    1985. 找出数组中的第 K 大整数
*/
/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
/* 基数排序 */
// var kthLargestNumber = function(nums, k) {
//     const n = nums.length

//     // 基数排序
//     RadixSort(nums)

//     // 返回第k大的数
//     return nums[n-k]

//     function RadixSort(arr){
//         // 获取最大位数
//         let maxDigit = GetMaxDigit(arr)

//         // 对每一位依次排序
//         for(let digit=1; digit<=maxDigit; digit++){
//             // 基数数组（桶）
//             let RadixArray = Array.from({length:10}, ()=>[])

//             // 入桶
//             for(let i=0; i<n; i++){
//                 if(arr[i].length < digit){
//                     RadixArray[0].push(arr[i])
//                 }else{
//                     RadixArray[ arr[i][arr[i].length - digit] ].push(arr[i])
//                 }
//             }
//             // 出桶指针
//             let p = 0
//             // 出桶
//             for(let i=0; i<10; i++){
//                 if(RadixArray[i].length > 0){
//                     for(let j=0; j<RadixArray[i].length; j++){
//                         arr[p] = RadixArray[i][j]   
//                         p++
//                     }
//                 }
//             }
//         }
//     }

//     function GetMaxDigit(arr){
//         let maxDigit = 0
//         for(let i=0; i<n; i++){
//             maxDigit = maxDigit > arr[i].length ? maxDigit : arr[i].length
//         }
//         return maxDigit
//     }
// };

/* 快排 */
// var kthLargestNumber = function(nums, k){
//     const n = nums.length

//     // 处理数组
//     for(let i=0; i<n; i++){
//         nums[i] = BigInt(nums[i])
//     }

//     console.log(nums)
//     // 优化快排
//     QuickSort(nums)

//     // 返回第K大
//     return nums[n-k] + ""

//     function QuickSort(arr){
//         RecursiveBody(arr)
//         return
//     }

//     function RecursiveBody(arr, L=0, R=n-1){
//         // 基本情况：数组长度为1
//         if(L == R){
//             return
//         }

//         // 划分小于区、大于区
//         let [lp, rp] = Partition(arr, L ,R)

//         // lp rp 与 k 进行比较
//         if(lp < n-k && rp > n-k){
//             return
//         }else if(lp >= n-k){
//             RecursiveBody(arr, L, lp)
//         }else{
//             RecursiveBody(arr, rp, R)
//         }
//     }

//     function Partition(arr, L, R){
//         // 小于区、大于区指针
//         let lp = L-1, rp = R+1
//         // 等概率随机选择位置作为基准位置
//         Swap(arr, L, L + Math.floor(Math.random() * (R - L + 1)))
//         // 基准值
//         let baseValue = arr[L]

//         // 划分大于小于区
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

/* 堆排序 */
var kthLargestNumber = function(nums, k) {
    const n = nums.length

    // 处理数组
    for(let i=0; i<n; i++){
        nums[i] = BigInt(nums[i])
    }

    // 堆排序
    HeapSort(nums)

    // 返回第k大
    return nums[0] + ""

    // 始终维护一个长度为k的小根堆
    function HeapSort(nums){
        // 构造一个长度为k的小根堆
        for(let i=0; i<k; i++){
            Heapinsert(nums, i)
        }

        // 遍历剩余的数组，与堆顶比较
        for(let i=k; i<n; i++){
            if(nums[i] > nums[0]){
                Swap(nums, 0, i)
                Heapify(nums, 0, k)
            }
        }
    }

    // 从下向上插入，构造小根堆，插入的元素在数组中的索引为index
    function Heapinsert(arr, index){
        while(arr[index] < arr[ Math.floor((index - 1) / 2) ]){
            Swap(arr, index, Math.floor((index - 1) / 2))
            index = Math.floor((index - 1) / 2)
        }
    }

    // 从上向下调整，调整的位置在数组中的索引为index，下界为heapSize
    function Heapify(arr, index, heapSize){
        // 获取左孩子
        let leftChild = index * 2 + 1
        
        while(leftChild < heapSize){
            // 获取最小孩子
            let minChild = (leftChild + 1 < heapSize) && (arr[leftChild + 1] < arr[leftChild]) ? leftChild + 1 : leftChild 

            if(arr[index] > arr[minChild]){
                Swap(arr, index, minChild)
                index = minChild
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
};

/* 直接比较字符串 */
// var kthLargestNumber = function(nums, k) {

//     return nums.sort((a, b) => b.length - a.length || (b > a ? 1 : -1))[k - 1]
    
// };


console.log(kthLargestNumber(
    ["2","21","12","1"],
    3
))