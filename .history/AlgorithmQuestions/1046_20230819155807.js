/* 
    1046. 最后一块石头的重量
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
/* 排序api */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => b-a)
        let nums1 = stones.shift()
        let nums2 = stones.shift()
        if(Math.abs(nums1 - nums2) != 0){
            stones.unshift(Math.abs(nums1 - nums2))
        }
    }
    return stones.length == 0 ? [0] : stones
};

/* 最大堆 */
var lastStoneWeight = function(stones) {
    const n = stones.length
    // 构建大根堆
    for(let i=0; i<n; i++){
        Heapinsert(stones, i)
    }
    console.log(stones)
    let heapSize = n
    // 弹出最大的两个
    // 将差值插入堆中，并调整堆
    // 直到堆的大小 <= 1, 堆大小为1则返回堆顶元素, 堆大小为0则返回0
    while(heapSize > 1){
        let nums1 = stones[0]
        Swap(stones, 0, --heapSize)
        Heapify(stones, 0, heapSize)
        
        let nums2 = stones[0]
        Swap(stones, 0, --heapSize)
        Heapify(stones, 0, heapSize)

        if(Math.abs(nums1 - nums2) != 0){
            stones.push(Math.abs(nums1 - nums2))
            Heapinsert(stones, stones.length-1, heapSize)
            heapSize++
        }
    }

    return heapSize > 0 ? stones[0] : [0]

    function Swap(arr, index1, index2){
        let tmp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = tmp
    }

    // 插入的元素在数组中的索引为index
    function Heapinsert(arr, index){
        while(arr[index] > arr[parseInt((index - 1) / 2)]){
            Swap(arr, index, parseInt((index - 1) / 2))
            index = parseInt((index - 1) / 2)
        }
    }   

    // 需要调整的元素在数组中的索引为idnex
    function Heapify(arr, index, heapSize){
        let leftChild = index = 2 + 1

        while(leftChild < heapSize){
            let maxChild = (leftChild + 1 < heapSize) && (arr[leftChild + 1] > arr[leftChild]) ? leftChild + 1 : leftChild

            if(arr[maxChild] > arr[index]){
                Swap(arr, maxChild ,index)
                index = maxChild
                leftChild = index * 2 + 1
            }else{
                break
            }
        }
    }
};
console.log(lastStoneWeight([2,7,4,1,8,1]))