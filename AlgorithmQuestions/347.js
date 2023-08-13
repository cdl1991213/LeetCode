/* 
    347. 前 K 个高频元素
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* 计数排序 */
// var topKFrequent = function(nums, k) {
//     const n = nums.length

//     // 计数排序
//     let [CountArray, offset] = CountSort(nums)

//     let res = []

//     // k次循环找到前k大的值
//     for(let i=0; i<k; i++){
//         let maxIndex = 0
//         for(let i=1; i<CountArray.length; i++){
//             if(CountArray[maxIndex] < CountArray[i]){
//                 maxIndex = i
//             }
//         }
//         res.push(maxIndex+offset)
//         CountArray[maxIndex] = Number.MIN_SAFE_INTEGER
//     }

//     return res

//     function CountSort(arr){
//         // 获取最大值、最小值
//         let maxValue = Number.MIN_SAFE_INTEGER, minValue = Number.MAX_SAFE_INTEGER
//         for(let i=0; i<n; i++){
//             maxValue = maxValue > arr[i] ? maxValue : arr[i]
//             minValue = minValue < arr[i] ? minValue : arr[i]
//         }
//         // 计数数组
//         let CountArray = new Array(maxValue - minValue + 1).fill(0)
//         // 数组索引偏移量
//         let offset = minValue

//         for(let i=0; i<n; i++){
//             CountArray[ arr[i] - offset ]++
//         }

//         return [CountArray, offset]
//     }

// };

/* Map */
// var topKFrequent = function (nums, k) {
//     const n = nums.length

//     let map = new Map()

//     for(let i=0; i<n; i++){
//         if(!map.get(nums[i])){
//             map.set(nums[i] , 1)
//         }else{
//             map.set(nums[i], map.get(nums[i]) + 1)
//         }
//     }

//     let mapArray = Array.from(map).sort((a,b)=>b[1] - a[1])
    
//     let res = []
//     for(let i=0; i<k; i++){
//         res.push(mapArray[i][0])
//     }

//     return res
// };

/* 小根堆 */
var topKFrequent = function(nums, k){
    const n = nums.length

    let map = new Map()

    for(let i=0; i<n; i++){
        if(!map.get(nums[i])){
            map.set(nums[i] , 1)
        }else{
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }

    let mapArray = Array.from(map)
    // console.log(mapArray)

    // 维护一个长度为k的小根堆
    for(let i=0; i<k; i++){
        Heapinsert(mapArray, i)
    }
    // console.log(mapArray)

    // 将数组剩余元素从下向上插入小根堆（判断），从上向下调整小根堆
    for(let i=k; i<mapArray.length; i++){
        if(mapArray[0][1] < mapArray[i][1]){
            Swap(mapArray, i, 0)
            Heapify(mapArray, 0, k)
        }
        // console.log(mapArray)
    }

    // 返回小根堆所有元素
    let res= []
    for(let i=0; i<k; i++){
        res.push(mapArray[i][0])
    }
    return res

    function Heapinsert(arr, index){
        while(arr[ Math.floor(index - 1 / 2) ] && ( arr[index][1] < arr[ Math.floor(index - 1 / 2) ][1] )){
            Swap(arr, index, Math.floor(index - 1 / 2))
            index = Math.floor(index - 1 / 2)
        }
    }

    function Heapify(arr, index, heapSize){
        // 获取左孩子
        let leftChild = index * 2 + 1

        while(leftChild < heapSize){
            // 获取最小孩子
            let minChild = (leftChild + 1 < heapSize) && (arr[leftChild + 1][1] < arr[leftChild][1]) ? leftChild + 1 : leftChild

            if(arr[index][1] > arr[minChild][[1]]){
                Swap(arr, index , minChild)
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
}

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
